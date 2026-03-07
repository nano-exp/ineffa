'use client';

import DocumentLayout from '@/components/DocumentLayout';

export default function NginxVsCaddyPage() {
  return (
    <DocumentLayout title="Nginx vs Caddy" subtitle="两大 Web 服务器对比">
      <p className="mb-5 text-[#4a4a4a]">
        Nginx 和 Caddy 都是流行的 Web 服务器，但它们在设计理念、功能特性和使用场景上有着显著差异。了解两者的区别有助于选择最适合你项目的服务器。
      </p>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">核心对比</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-6 rounded">
          <h3 className="font-['Noto_Serif_SC',serif] text-xl font-medium text-[#8b4513] text-center mb-4">Nginx</h3>
          <ul className="space-y-2 text-sm text-[#4a4a4a]">
            <li><span className="font-medium">诞生时间：</span>2004年</li>
            <li><span className="font-medium">语言：</span>C</li>
            <li><span className="font-medium">配置方式：</span>配置文件</li>
            <li><span className="font-medium">自动 HTTPS：</span>不支持</li>
            <li><span className="font-medium">性能：</span>极高</li>
          </ul>
        </div>
        <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-6 rounded">
          <h3 className="font-['Noto_Serif_SC',serif] text-xl font-medium text-[#8b4513] text-center mb-4">Caddy</h3>
          <ul className="space-y-2 text-sm text-[#4a4a4a]">
            <li><span className="font-medium">诞生时间：</span>2015年</li>
            <li><span className="font-medium">语言：</span>Go</li>
            <li><span className="font-medium">配置方式：</span>Caddyfile / JSON</li>
            <li><span className="font-medium">自动 HTTPS：</span>内置支持</li>
            <li><span className="font-medium">性能：</span>高</li>
          </ul>
        </div>
      </div>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">详细对比</h2>
      
      <h3 className="text-lg font-medium text-[#a0522d] mt-6 mb-3">1. 配置方式</h3>
      <p className="mb-3 text-[#4a4a4a]">
        <strong>Nginx</strong> 使用传统的配置文件语法，语法简洁但功能丰富。配置通常包含 server、location、upstream 等块结构，功能强大但学习曲线较陡。
      </p>
      <p className="mb-5 text-[#4a4a4a]">
        <strong>Caddy</strong> 的配置文件名为 Caddyfile，语法极为简洁直观，大部分场景只需要几行配置就能完成。它还支持 JSON 格式配置以实现更精细的控制。
      </p>

      <h3 className="text-lg font-medium text-[#a0522d] mt-6 mb-3">2. HTTPS 支持</h3>
      <p className="mb-3 text-[#4a4a4a]">
        <strong>Nginx</strong> 本身不提供自动 HTTPS 功能，需要配合 Let's Encrypt 客户端（如 Certbot）来实现证书自动续期。配置过程相对复杂。
      </p>
      <p className="mb-5 text-[#4a4a4a]">
        <strong>Caddy</strong> 内置 Let's Encrypt 支持，自动获取和续期 TLS 证书。只需在配置中指定域名，Caddy 会自动处理 HTTPS 相关的所有事项。
      </p>

      <h3 className="text-lg font-medium text-[#a0522d] mt-6 mb-3">3. 性能</h3>
      <p className="mb-5 text-[#4a4a4a]">
        <strong>Nginx</strong> 以高性能著称，采用事件驱动的异步架构，内存占用极低。在高并发场景下表现优异，是目前性能最强的 Web 服务器之一。
      </p>
      <p className="mb-5 text-[#4a4a4a]">
        <strong>Caddy</strong> 使用 Go 语言开发，性能虽然不如 Nginx，但在大多数应用场景下已经完全足够。Go 的并发优势使其在处理 HTTP/2 和 HTTP/3 时表现出色。
      </p>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">Nginx 的优势与劣势</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#f3f1ed] border-l-4 border-green-600 p-5 rounded">
          <h4 className="font-['Noto_Serif_SC',serif] text-base font-medium text-green-700 mb-3">优势</h4>
          <ul className="text-sm text-[#4a4a4a] space-y-1">
            <li>• 性能极高，并发能力强</li>
            <li>• 配置文件功能强大灵活</li>
            <li>• 生态成熟，文档完善</li>
            <li>• 社区活跃，解决方案多</li>
            <li>• 占用内存极低</li>
          </ul>
        </div>
        <div className="bg-[#f3f1ed] border-l-4 border-red-600 p-5 rounded">
          <h4 className="font-['Noto_Serif_SC',serif] text-base font-medium text-red-700 mb-3">劣势</h4>
          <ul className="text-sm text-[#4a4a4a] space-y-1">
            <li>• 配置语法学习曲线陡</li>
            <li>• 无内置自动 HTTPS</li>
            <li>• 热更新配置有时不稳定</li>
            <li>• 模块需要编译安装</li>
            <li>• 不支持 HTTP/3（原生）</li>
          </ul>
        </div>
      </div>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">Caddy 的优势与劣势</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#f3f1ed] border-l-4 border-green-600 p-5 rounded">
          <h4 className="font-['Noto_Serif_SC',serif] text-base font-medium text-green-700 mb-3">优势</h4>
          <ul className="text-sm text-[#4a4a4a] space-y-1">
            <li>• 自动 HTTPS，开箱即用</li>
            <li>• 配置简洁易学</li>
            <li>• 原生支持 HTTP/3</li>
            <li>• 自动 HTTP 到 HTTPS 重定向</li>
            <li>• 默认启用多项安全特性</li>
          </ul>
        </div>
        <div className="bg-[#f3f1ed] border-l-4 border-red-600 p-5 rounded">
          <h4 className="font-['Noto_Serif_SC',serif] text-base font-medium text-red-700 mb-3">劣势</h4>
          <ul className="text-sm text-[#4a4a4a] space-y-1">
            <li>• 性能略低于 Nginx</li>
            <li>• 生态相对较小</li>
            <li>• 内存占用较高</li>
            <li>• 生产环境验证时间较短</li>
            <li>• 部分高级功能需插件</li>
          </ul>
        </div>
      </div>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">使用场景</h2>
      <div className="bg-[#e8e5df] border-l-4 border-[#8b4513] p-5 mb-4">
        <div className="font-semibold text-[#8b4513] mb-2">选择 Nginx 当：</div>
        <p className="text-sm text-[#4a4a4a] mb-1">• 需要处理超高并发流量</p>
        <p className="text-sm text-[#4a4a4a] mb-1">• 需要精细控制服务器行为</p>
        <p className="text-sm text-[#4a4a4a]">• 已有成熟的 Nginx 配置体系</p>
      </div>
      <div className="bg-[#e8e5df] border-l-4 border-[#8b4513] p-5 mb-8">
        <div className="font-semibold text-[#8b4513] mb-2">选择 Caddy 当：</div>
        <p className="text-sm text-[#4a4a4a] mb-1">• 追求简单快速的部署体验</p>
        <p className="text-sm text-[#4a4a4a] mb-1">• 需要自动 HTTPS 且不想手动配置</p>
        <p className="text-sm text-[#4a4a4a]">• 使用 HTTP/3 特性</p>
      </div>

      <div className="bg-gradient-to-r from-[#f3f1ed] to-[#e8e5df] border border-[#d4d1ca] p-8 rounded-lg text-center mt-10">
        <h3 className="font-['Noto_Serif_SC',serif] text-xl text-[#8b4513] mb-3">总结</h3>
        <p className="text-[#4a4a4a]">Nginx 和 Caddy 各有优劣。Nginx 适合对性能和灵活性有高要求的场景，是经过时间检验的工业级解决方案。Caddy 则更适合追求简单体验、需要快速部署 HTTPS 的项目和团队。</p>
      </div>
    </DocumentLayout>
  );
}
