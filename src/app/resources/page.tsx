'use client';

import Link from 'next/link';

const links = [
  {
    href: '/resources/opencode-non-interactive',
    title: 'OpenCode 非交互式执行',
    desc: 'OpenCode CLI 非交互式执行指南',
  },
  {
    href: '/resources/ai-centric-workflow',
    title: '以 AI 为中心的工作流',
    desc: 'AI-Centric Workflow - 智能化软件开发新范式',
  },
  {
    href: '/resources/riemann-hypothesis',
    title: '黎曼猜想',
    desc: '探索数学史上最著名的未解之谜',
  },
  {
    href: '/resources/hilbert-problems',
    title: '希尔伯特23问',
    desc: '1900年提出的23个数学挑战',
  },
  {
    href: '/resources/nginx-vs-caddy',
    title: 'Nginx vs Caddy',
    desc: '两大 Web 服务器对比',
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-[#1a1a1a] leading-relaxed text-lg px-6 py-10 flex flex-col items-center justify-center font-['Crimson_Pro','Source_Serif_4','Noto_Serif_SC',serif]">
      <h1 className="font-['Noto_Serif_SC',serif] text-3xl font-medium mb-10 text-[#1a1a1a]">
        资源索引
      </h1>
      <div className="flex flex-col gap-5 w-full max-w-md">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-baseline gap-3 bg-[#f3f1ed] border border-[#d4d1ca] p-4 rounded hover:border-[#8b4513] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            <div className="text-lg font-medium text-[#8b4513] whitespace-nowrap">
              {link.title}
            </div>
            <div className="text-sm text-[#6b6b6b]">
              {link.desc}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
