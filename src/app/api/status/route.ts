import { execSync } from 'child_process';

// 简单的命令执行包装 - 只捕获 stdout，过滤掉日志行
function execSafe(command: string, timeout = 5000): { data: any | null; error?: string; raw?: string } {
  try {
    // 执行命令，丢弃 stderr
    const output = execSync(`${command} 2>/dev/null`, { encoding: 'utf-8', timeout });
    
    // 策略：找出完整的 JSON 对象
    // 过滤掉日志行（以 [ 开头但不是 [{ 或 [[ 的行）
    const lines = output.split('\n');
    const jsonLines: string[] = [];
    let inJson = false;
    
    for (const line of lines) {
      if (!line) continue;
      const trimmed = line.trim();
      
      // 检测 JSON 开始
      if (trimmed.startsWith('{') || trimmed.startsWith('[{') || trimmed.startsWith('[[')) {
        inJson = true;
      }
      
      // 如果在 JSON 区域内，收集该行
      if (inJson) {
        jsonLines.push(line);
      }
    }
    
    if (jsonLines.length === 0) {
      return { data: null, error: 'No JSON found', raw: output.slice(0, 200) };
    }
    
    const jsonText = jsonLines.join('\n');
    
    try {
      return { data: JSON.parse(jsonText) };
    } catch {
      return { data: null, error: 'Failed to parse JSON', raw: jsonText.slice(0, 200) };
    }
  } catch (err: any) {
    return { data: null, error: err.message || 'Command failed' };
  }
}

// 生成流式 NDJSON 响应
export async function GET() {
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    async start(controller) {
      // 辅助函数：发送数据块
      const send = (chunk: any) => {
        controller.enqueue(encoder.encode(JSON.stringify(chunk) + '\n'));
      };

      // 1. 先发送系统信息（最快）
      const systemInfo = {
        platform: process.platform,
        arch: process.arch,
        nodeVersion: process.version,
        timestamp: Date.now(),
      };
      send({ type: 'system', data: systemInfo });

      // 2. 获取 Gateway 服务状态
      const gatewayResult = execSafe('openclaw gateway status --json 2>/dev/null', 3000);
      if (gatewayResult.data) {
        send({
          type: 'gateway',
          data: {
            running: gatewayResult.data.service?.runtime?.status === 'running',
            mode: gatewayResult.data.gateway?.bindMode || 'loopback',
            url: gatewayResult.data.gateway?.probeUrl || 'ws://127.0.0.1:18789',
            reachable: gatewayResult.data.rpc?.ok || false,
            error: gatewayResult.data.rpc?.error || undefined,
            service: {
              installed: gatewayResult.data.service?.loaded || false,
              runtime: gatewayResult.data.service?.runtime?.status === 'running' 
                ? `running (pid: ${gatewayResult.data.service.runtime.pid})`
                : 'stopped',
            },
          },
        });
      } else {
        send({ type: 'gateway', data: null, error: gatewayResult.error });
      }

      // 3. 获取总体状态（给更长的超时时间）
      const statusResult = execSafe('openclaw status --json 2>/dev/null', 15000);
      if (statusResult.data) {
        // 会话数据
        send({
          type: 'sessions',
          data: {
            total: statusResult.data.sessions?.count || 0,
            recent: (statusResult.data.sessions?.recent || []).slice(0, 5).map((s: any) => ({
              agentId: s.agentId,
              model: s.model,
              inputTokens: s.inputTokens || 0,
              outputTokens: s.outputTokens || 0,
              totalTokens: s.totalTokens || 0,
              percentUsed: s.percentUsed || 0,
            })),
          },
        });

        // 频道数据
        send({
          type: 'channels',
          data: statusResult.data.channelSummary || [],
        });

        // 心跳配置
        send({
          type: 'heartbeat',
          data: {
            enabled: statusResult.data.heartbeat?.agents?.[0]?.enabled || false,
            interval: statusResult.data.heartbeat?.agents?.[0]?.every || '30m',
          },
        });

        // Agent 信息
        send({
          type: 'agents',
          data: {
            total: statusResult.data.agents?.agents?.length || 1,
            defaultId: statusResult.data.agents?.defaultId || 'main',
          },
        });

        // 系统信息（更详细的）
        send({
          type: 'os',
          data: {
            platform: statusResult.data.os?.platform || process.platform,
            arch: statusResult.data.os?.arch || process.arch,
            release: statusResult.data.os?.release || '',
          },
        });
      } else {
        send({ type: 'error', message: statusResult.error || 'Failed to fetch status' });
      }

      // 标记完成
      send({ type: 'complete', timestamp: Date.now() });
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'application/x-ndjson',
      'Cache-Control': 'no-cache',
    },
  });
}