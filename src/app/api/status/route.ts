import { execSync } from 'child_process';

export async function GET() {
  try {
    // 获取状态
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

    // 简化输出
    return Response.json({
      running: true,
      sessions: status.sessions?.count || 0,
      model: status.agents?.defaultId || 'unknown',
      uptime: status.os?.uptime ? `${Math.floor(status.os.uptime / 60)}m` : 'unknown',
      platform: `${status.os?.platform} ${status.os?.arch}`,
      version: status.gateway?.version || 'unknown',
      timestamp: new Date().toISOString(),
    });

  } catch (err: any) {
    return Response.json({ 
      running: false, 
      error: err.message 
    }, { status: 500 });
  }
}
