'use client';

import DocumentLayout from '@/components/DocumentLayout';

export default function OpenCodeNonInteractivePage() {
  return (
    <DocumentLayout title="OpenCode 非交互式执行指南" subtitle="OpenCode CLI 不仅可以在终端中启动交互式 TUI，还支持多种非交互式执行方式，方便在脚本、CI/CD 管道和自动化场景中使用。">
      <h2 className="font-['Noto_Serif_SC',serif] text-xl font-medium mt-10 mb-5 text-[#8b4513]">1. 使用 <code className="font-mono text-sm bg-[#f3f1ed] px-1.5 py-0.5 rounded text-[#a0522d]">opencode run</code> 直接执行命令</h2>
      <p className="mb-4 text-[#4a4a4a]">最简单的方式是使用 <code className="font-mono text-sm bg-[#f3f1ed] px-1.5 py-0.5 rounded text-[#a0522d]">run</code> 子命令直接传入提示词：</p>
      <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded mb-5 overflow-x-auto text-sm font-mono leading-relaxed">opencode run "Explain how closures work in JavaScript"</pre>
      <p className="mb-4 text-[#4a4a4a]">这会启动一个非交互式会话，执行完成后自动退出。</p>

      <h3 className="text-lg font-medium mt-8 mb-3 text-[#1a1a1a]">常用参数</h3>
      <div className="overflow-x-auto mb-5">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left border-b border-[#d4d1ca] bg-[#f3f1ed] font-medium text-[#1a1a1a]">参数</th>
              <th className="p-3 text-left border-b border-[#d4d1ca] bg-[#f3f1ed] font-medium text-[#1a1a1a]">简写</th>
              <th className="p-3 text-left border-b border-[#d4d1ca] bg-[#f3f1ed] font-medium text-[#1a1a1a]">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"><code className="font-mono text-sm">--model</code></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">-m</td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">指定使用的模型</td></tr>
            <tr><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"><code className="font-mono text-sm">--agent</code></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">指定使用的 agent</td></tr>
            <tr><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"><code className="font-mono text-sm">--continue</code></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">-c</td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">继续上一个会话</td></tr>
            <tr><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"><code className="font-mono text-sm">--format</code></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">输出格式：default 或 json</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-['Noto_Serif_SC',serif] text-xl font-medium mt-10 mb-5 text-[#8b4513]">2. 使用 <code className="font-mono text-sm bg-[#f3f1ed] px-1.5 py-0.5 rounded text-[#a0522d]">opencode serve</code> 启动 Headless 服务器</h2>
      <p className="mb-4 text-[#4a4a4a]">启动一个 HTTP 服务器，提供 API 访问能力：</p>
      <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded mb-5 overflow-x-auto text-sm font-mono">opencode serve</pre>

      <h2 className="font-['Noto_Serif_SC',serif] text-xl font-medium mt-10 mb-5 text-[#8b4513]">3. 使用 <code className="font-mono text-sm bg-[#f3f1ed] px-1.5 py-0.5 rounded text-[#a0522d]">opencode acp</code> 启动 ACP 服务器</h2>
      <p className="mb-4 text-[#4a4a4a]">ACP（Agent Client Protocol）服务器通过 stdin/stdout 使用 nd-JSON 进行通信：</p>
      <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded mb-5 overflow-x-auto text-sm font-mono">opencode acp</pre>

      <h2 className="font-['Noto_Serif_SC',serif] text-xl font-medium mt-10 mb-5 text-[#8b4513]">4. 集成到 CI/CD</h2>
      <h3 className="text-lg font-medium mt-6 mb-3 text-[#1a1a1a]">GitHub Actions</h3>
      <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded mb-5 overflow-x-auto text-sm font-mono">opencode github run --event pull_request --token $GITHUB_TOKEN</pre>

      <h2 className="font-['Noto_Serif_SC',serif] text-xl font-medium mt-10 mb-5 text-[#8b4513]">5. 全局环境变量</h2>
      <div className="overflow-x-auto mb-5">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left border-b border-[#d4d1ca] bg-[#f3f1ed] font-medium">变量</th>
              <th className="p-3 text-left border-b border-[#d4d1ca] bg-[#f3f1ed] font-medium">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"><code className="font-mono text-sm">OPENCODE_AUTO_SHARE</code></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">自动分享会话</td></tr>
            <tr><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]"><code className="font-mono text-sm">OPENCODE_SERVER_PASSWORD</code></td><td className="p-3 border-b border-[#d4d1ca] text-[#4a4a4a]">服务器 Basic 认证密码</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-['Noto_Serif_SC',serif] text-xl font-medium mt-10 mb-5 text-[#8b4513]">6. 最佳实践</h2>
      <ol className="list-decimal list-inside mb-4 text-[#4a4a4a] space-y-2">
        <li><strong>频繁调用</strong>：使用 <code className="font-mono text-sm">opencode serve</code> 启动服务器后用 <code className="font-mono text-sm">--attach</code> 复用</li>
        <li><strong>脚本输出</strong>：使用 <code className="font-mono text-sm">--format json</code> 获取结构化结果</li>
        <li><strong>权限控制</strong>：通过环境变量限制工具权限</li>
      </ol>
    </DocumentLayout>
  );
}
