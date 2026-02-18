import { execSync } from 'child_process';

export async function GET() {
  try {
    const output = execSync('openclaw status --json', { 
      encoding: 'utf-8', 
      timeout: 10000 
    });
    
    // 找到 JSON 行
    const lines = output.trim().split('\n');
    let status = null;
    
    for (const line of lines) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.sessions) {
          status = parsed;
          break;
        }
      } catch {
        // 跳过非 JSON 行
      }
    }

    if (!status) {
      return Response.json({ error: '无法解析状态' }, { status: 500 });
    }

    // 返回前端需要的数据结构
    return Response.json({
      gateway: {
        running: status.gateway?.running ?? true,
        mode: status.gateway?.bindMode || 'loopback',
        url: status.gateway?.probeUrl || 'ws://127.0.0.1:18789',
        reachable: status.rpc?.ok || false,
        service: {
          installed: status.service?.loaded || false,
          runtime: status.service?.runtime?.status === 'running' 
            ? `running (pid: ${status.service.runtime.pid})`
            : 'stopped',
        },
      },
      sessions: {
        total: status.sessions?.count || 0,
        recent: (status.sessions?.recent || []).slice(0, 5).map((s: any) => ({
          agentId: s.agentId,
          model: s.model,
          inputTokens: s.inputTokens || 0,
          outputTokens: s.outputTokens || 0,
          totalTokens: s.totalTokens || 0,
          percentUsed: s.percentUsed || 0,
        })),
      },
      agents: {
        total: status.agents?.agents?.length || 1,
        defaultId: status.agents?.defaultId || 'main',
      },
      heartbeat: {
        enabled: status.heartbeat?.agents?.[0]?.enabled || false,
        interval: status.heartbeat?.agents?.[0]?.every || '30m',
      },
      os: {
        platform: status.os?.platform || 'linux',
        arch: status.os?.arch || 'x64',
        release: status.os?.release || '',
      },
      updatedAt: new Date().toISOString(),
    });

  } catch (err: any) {
    return Response.json({ 
      error: err.message 
    }, { status: 500 });
  }
}
