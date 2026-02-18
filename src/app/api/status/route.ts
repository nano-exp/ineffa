import { execSync } from 'child_process';

export async function GET() {
  try {
    const output = execSync('openclaw status --json 2>/dev/null', { 
      encoding: 'utf-8', 
      timeout: 10000 
    });
    
    // 找到 JSON 对象（从 { 开始，到 } 结束）
    const jsonStart = output.indexOf('{');
    if (jsonStart === -1) {
      return Response.json({ error: 'No JSON found' }, { status: 500 });
    }
    
    const jsonText = output.slice(jsonStart);
    const status = JSON.parse(jsonText);

    // 返回前端需要的数据结构
    return Response.json({
      gateway: {
        running: status.gatewayService?.runtimeShort?.includes('running') ?? false,
        mode: status.gateway?.mode || 'local',
        url: status.gateway?.url || 'ws://127.0.0.1:18789',
        reachable: status.gateway?.reachable || false,
        service: {
          installed: status.gatewayService?.installed || false,
          runtime: status.gatewayService?.runtimeShort || 'unknown',
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
