'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServerSharp from '@ricons/ionicons5/es/ServerSharp';
import PulseSharp from '@ricons/ionicons5/es/PulseSharp';
import ChatbubblesSharp from '@ricons/ionicons5/es/ChatbubblesSharp';
import TimeSharp from '@ricons/ionicons5/es/TimeSharp';
import HardwareChipSharp from '@ricons/ionicons5/es/HardwareChipSharp';
import RefreshSharp from '@ricons/ionicons5/es/RefreshSharp';
import HomeSharp from '@ricons/ionicons5/es/HomeSharp';
import SkeletonCard from '@/components/SkeletonCard';
import { useGatewayStatus } from '@/hooks/useGatewayStatus';
import { formatNumber } from '@/lib/utils';

export default function Dashboard() {
  const { state, isLoading, error, refresh } = useGatewayStatus();
  const [progress, setProgress] = useState(0);

  const handleRefresh = () => {
    setProgress(0);
    refresh();
  };

  return (
    <main className="min-h-screen paper-texture text-ink scanline overflow-x-hidden">
      <div className="h-2 bg-gradient-to-r from-rust via-warm-brown to-teal" />

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex justify-between items-end border-b-2 border-warm-brown/30 pb-4 mb-6">
          <div>
            <p className="text-xs tracking-[0.4em] text-warm-brown uppercase mb-1">System Monitor</p>
            <p className="text-xs text-warm-brown/60">OpenClaw Gateway Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="vintage-label bg-teal hover:bg-teal/80 transition-colors flex items-center gap-2"
            >
              <HomeSharp style={{ width: '14px', height: '14px' }} />
              首页
            </Link>
            <span className="vintage-label">Dashboard</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        {/* Title & Refresh */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-ink">网关状态监控</h1>
            <p className="text-warm-brown mt-2">OpenClaw Gateway Status Monitor</p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="vintage-border p-3 bg-cream/50 hover:bg-cream transition-all duration-300 disabled:opacity-50"
          >
            <RefreshSharp 
              style={{ width: '20px', height: '20px' }} 
              className={`text-teal ${isLoading ? 'animate-spin' : ''}`}
            />
          </button>
        </div>

        {error && (
          <div className="vintage-border bg-rust/10 border-rust p-4 mb-8">
            <p className="text-rust font-semibold">获取状态失败</p>
            <p className="text-ink/70 text-sm">{error}</p>
          </div>
        )}

        {/* Status Cards Grid - 渐进显示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Gateway Status */}
          {state.gateway ? (
            <div className="vintage-border bg-cream/80 p-5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 flex items-center justify-center text-rust">
                  <ServerSharp style={{ width: '100%', height: '100%' }} />
                </span>
                <p className="text-xs text-warm-brown uppercase tracking-wider">Gateway</p>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${state.gateway.running ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <p className="text-lg font-bold text-ink">
                  {state.gateway.running ? '运行中' : '已停止'}
                </p>
              </div>
            </div>
          ) : (
            <SkeletonCard />
          )}

          {/* Sessions */}
          {state.sessions ? (
            <div className="vintage-border bg-cream/80 p-5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 flex items-center justify-center text-teal">
                  <ChatbubblesSharp style={{ width: '100%', height: '100%' }} />
                </span>
                <p className="text-xs text-warm-brown uppercase tracking-wider">会话</p>
              </div>
              <p className="text-3xl font-black text-ink">{state.sessions.total}</p>
              <p className="text-xs text-ink/50">活跃会话总数</p>
            </div>
          ) : (
            <SkeletonCard />
          )}

          {/* Heartbeat */}
          {state.heartbeat ? (
            <div className="vintage-border bg-cream/80 p-5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 flex items-center justify-center text-warm-brown">
                  <PulseSharp style={{ width: '100%', height: '100%' }} />
                </span>
                <p className="text-xs text-warm-brown uppercase tracking-wider">心跳检测</p>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${state.heartbeat.enabled ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                <p className="text-lg font-bold text-ink">
                  {state.heartbeat.enabled ? '已启用' : '已禁用'}
                </p>
              </div>
              <p className="text-xs text-ink/50">间隔: {state.heartbeat.interval}</p>
            </div>
          ) : (
            <SkeletonCard />
          )}

          {/* System */}
          {state.os ? (
            <div className="vintage-border bg-cream/80 p-5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 flex items-center justify-center text-rust">
                  <HardwareChipSharp style={{ width: '100%', height: '100%' }} />
                </span>
                <p className="text-xs text-warm-brown uppercase tracking-wider">系统</p>
              </div>
              <p className="text-lg font-bold text-ink capitalize">{state.os.platform}</p>
              <p className="text-xs text-ink/50 font-mono">{state.os.arch} · {state.os.release}</p>
            </div>
          ) : (
            <SkeletonCard />
          )}
        </div>

        {/* Service Details */}
        {state.gateway && state.agents ? (
          <div className="vintage-border bg-cream/80 p-6 mb-6 transition-all duration-500 animate-in fade-in">
            <h2 className="text-xl font-bold text-ink mb-4 flex items-center gap-2">
              <TimeSharp style={{ width: '20px', height: '20px' }} className="text-teal" />
              服务详情
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-warm-brown/10">
                  <span className="text-ink/60">服务模式</span>
                  <span className="text-ink font-mono">{state.gateway.mode}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-warm-brown/10">
                  <span className="text-ink/60">服务状态</span>
                  <span className="text-ink font-mono text-sm">{state.gateway.service.runtime}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-warm-brown/10">
                  <span className="text-ink/60">服务已安装</span>
                  <span className={state.gateway.service.installed ? 'text-green-600' : 'text-red-500'}>
                    {state.gateway.service.installed ? '是' : '否'}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-warm-brown/10">
                  <span className="text-ink/60">默认 Agent</span>
                  <span className="text-ink font-mono">{state.agents.defaultId}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-warm-brown/10">
                  <span className="text-ink/60">Agent 总数</span>
                  <span className="text-ink font-mono">{state.agents.total}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-warm-brown/10">
                  <span className="text-ink/60">最后更新</span>
                  <span className="text-ink font-mono text-sm">
                    {state.updatedAt ? new Date(state.updatedAt).toLocaleTimeString('zh-CN') : '-'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="vintage-border bg-cream/80 p-6 mb-6 animate-pulse">
            <div className="h-6 w-32 bg-warm-brown/20 rounded mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-8 bg-warm-brown/10 rounded" />
              ))}
            </div>
          </div>
        )}

        {/* Recent Sessions */}
        {state.sessions && state.sessions.recent.length > 0 && (
          <div className="vintage-border bg-cream/80 p-6 transition-all duration-500 animate-in fade-in">
            <h2 className="text-xl font-bold text-ink mb-4">最近会话</h2>
            <div className="space-y-3">
              {state.sessions.recent.map((session, i) => (
                <div key={i} className="flex flex-wrap items-center justify-between py-3 px-4 bg-cream/50 border border-warm-brown/10">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-warm-brown/20">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-semibold text-ink">{session.agentId}</p>
                      <p className="text-xs text-ink/50 font-mono">{session.model}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <p className="text-ink/60">Tokens</p>
                      <p className="font-mono text-teal">{formatNumber(session.totalTokens)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-ink/60">使用量</p>
                      <p className="font-mono text-rust">{session.percentUsed}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-warm-brown/20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-warm-brown/60 tracking-wider">
            OpenClaw Dashboard · 实时监控网关状态
          </p>
        </div>
      </footer>
    </main>
  );
}
