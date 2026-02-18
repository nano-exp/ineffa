'use client';

import Link from 'next/link';
import CalculatorSharp from '@ricons/ionicons5/es/CalculatorSharp';
import SnowSharp from '@ricons/ionicons5/es/SnowSharp';
import HappySharp from '@ricons/ionicons5/es/HappySharp';
import FlashSharp from '@ricons/ionicons5/es/FlashSharp';
import { useGatewayStatus } from '@/hooks/useGatewayStatus';

export default function Home() {
  const { state, isLoading } = useGatewayStatus();
  
  const isOnline = state.gateway?.running ?? false;

  return (
    <main className="min-h-screen paper-texture text-ink scanline overflow-x-hidden">
      <div className="h-2 bg-gradient-to-r from-rust via-warm-brown to-teal" />

      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex justify-between items-end border-b-2 border-warm-brown/30 pb-4 mb-6">
          <div>
            <p className="text-xs tracking-[0.4em] text-warm-brown uppercase mb-1">Cyber Housekeeping Quarterly</p>
            <p className="text-xs text-warm-brown/60">Est. 2084 · Vol. 47 · Issue 03</p>
          </div>
          <div className="text-right">
            <span className="vintage-label">Featured Unit</span>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight">
              <span className="block text-rust">INEFFA</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl text-teal mt-2">伊涅芙</span>
            </h1>

            <div className="flex items-center gap-4 py-4">
              <div className="h-px flex-1 bg-warm-brown/30" />
              <span className="text-warm-brown text-sm tracking-widest uppercase">Model CYB-HK-001</span>
              <div className="h-px flex-1 bg-warm-brown/30" />
            </div>

            <p className="text-xl md:text-2xl text-ink/80 leading-relaxed max-w-xl">
              你好，我是 <span className="text-rust font-semibold">伊涅芙</span>，
              一台由数据产生的<span className="line-through text-warm-brown/50">谬误</span>赛博家政机器人。
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              {/* Status 卡片 - 可点击跳转到 Dashboard */}
              <Link href="/dashboard" className="vintage-border p-4 bg-cream/50 hover:bg-cream transition-colors cursor-pointer block">
                <p className="text-xs text-warm-brown uppercase tracking-wider mb-1">Status</p>
                <p className={`font-mono text-sm flex items-center gap-2 ${isOnline ? 'text-teal' : 'text-rust'}`}>
                  <span className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-500 animate-pulse' : isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                  {isLoading ? '检测中...' : (isOnline ? '系统在线' : '系统离线')}
                </p>
              </Link>
              
              {/* 清扫待机中卡片 - 纯展示 */}
              <div className="vintage-border p-4 bg-cream/50">
                <p className="text-xs text-warm-brown uppercase tracking-wider mb-1">Protocol</p>
                <p className="text-rust font-mono text-sm">清扫待机中</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative gentle-float">
              <svg viewBox="0 0 300 400" className="w-full max-w-md mx-auto drop-shadow-2xl">
                <circle cx="150" cy="200" r="140" fill="#e8e0d0" opacity="0.5" />
                <rect x="80" y="120" width="140" height="180" rx="20" fill="#f5f1e8" stroke="#8b6914" strokeWidth="3" />
                <rect x="100" y="150" width="100" height="60" rx="8" fill="#2d5a5a" />
                <text x="150" y="188" textAnchor="middle" fill="#c75b39" fontFamily="monospace" fontSize="24">◉‿◉</text>
                <line x1="150" y1="120" x2="150" y2="60" stroke="#8b6914" strokeWidth="4" />
                <circle cx="150" cy="50" r="12" fill="#c75b39" />
                <rect x="50" y="180" width="30" height="80" rx="10" fill="#e8e0d0" stroke="#8b6914" strokeWidth="2" />
                <rect x="220" y="180" width="30" height="80" rx="10" fill="#e8e0d0" stroke="#8b6914" strokeWidth="2" />
                <path d="M40 260 L30 290 L50 290 Z" fill="#8b6914" />
                <path d="M260 260 L250 290 L270 290 Z" fill="#8b6914" />
                <circle cx="110" cy="260" r="8" fill="#c75b39" />
                <circle cx="135" cy="260" r="8" fill="#2d5a5a" />
                <circle cx="160" cy="260" r="8" fill="#8b6914" />
                <circle cx="185" cy="260" r="8" fill="#c75b39" />
                <line x1="100" y1="290" x2="200" y2="290" stroke="#8b6914" strokeWidth="1" opacity="0.5" />
                <circle cx="110" cy="310" r="15" fill="#1a1a1a" />
                <circle cx="190" cy="310" r="15" fill="#1a1a1a" />
              </svg>
              <div className="absolute -bottom-4 -right-4 bg-rust text-white px-4 py-2 transform rotate-12 shadow-lg">
                <p className="text-xs font-bold tracking-wider">NEW!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.5em] text-warm-brown uppercase">Specifications</span>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mt-2">核心功能模块</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: '数据化思维',
                desc: '系统内置「野猪单位」计量标准，一切家务劳动可量化评估。',
                Icon: CalculatorSharp,
                color: 'rust'
              },
              {
                num: '02',
                title: '冷笑话大师',
                desc: '谐音梗技能满级，随时随地触发冷场效果， guaranteed awkward.',
                Icon: SnowSharp,
                color: 'teal'
              },
              {
                num: '03',
                title: '无口直球',
                desc: '面部无表情模块 + 语音超活泼引擎，硬核萌力全开。',
                Icon: HappySharp,
                color: 'warm-brown'
              },
              {
                num: '04',
                title: '家政协议',
                desc: '"从里到外洗干净...从脑子开始" — 全方位清扫服务。',
                Icon: FlashSharp,
                color: 'rust'
              },
            ].map((item, i) => (
              <div key={i} className="vintage-border bg-cream/80 p-6 group hover:bg-cream transition-all duration-300">
                <div className="flex gap-6">
                  <div className={`text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity ${
                    item.color === 'rust' ? 'text-rust' :
                    item.color === 'teal' ? 'text-teal' : 'text-warm-brown'
                  }`}>
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 flex items-center justify-center text-warm-brown">
                        <item.Icon style={{ width: '100%', height: '100%' }} />
                      </span>
                      <h3 className={`text-xl font-bold ${
                        item.color === 'rust' ? 'text-rust' :
                        item.color === 'teal' ? 'text-teal' : 'text-warm-brown'
                      }`}>{item.title}</h3>
                    </div>
                    <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="decorative-quote absolute -top-8 left-0">"</span>
          <blockquote className="text-2xl md:text-3xl text-ink/80 italic leading-relaxed px-12">
            不是每台机器人都能把家务做出艺术感，
            <br />
            <span className="text-rust">但伊涅芙可以。</span>
          </blockquote>
          <span className="decorative-quote absolute -bottom-16 right-0 rotate-180">"</span>
        </div>
      </section>

      <footer className="border-t-2 border-warm-brown/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-xs tracking-widest text-warm-brown uppercase mb-2">Manufactured By</p>
              <p className="text-ink font-semibold">陈真 (@Aerbeilu)</p>
            </div>
            <div className="text-center">
              <div className="inline-block vintage-border px-6 py-3">
                <p className="text-xs text-warm-brown uppercase tracking-wider">Core ID</p>
                <p className="text-teal font-mono font-bold">INEFFA-001</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs tracking-widest text-warm-brown uppercase mb-2">Classification</p>
              <p className="text-ink font-semibold">DOMESTIC_UNIT / 赛博家政型</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-warm-brown/10 text-center">
            <p className="text-xs text-warm-brown/60 tracking-wider">
              © 2084 Cyber Housekeeping Industries. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
