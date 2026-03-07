'use client';

import DocumentLayout from '@/components/DocumentLayout';

export default function AICentricWorkflowPage() {
  return (
    <DocumentLayout title="以 AI 为中心的工作流" subtitle="AI-Centric Workflow - 构建智能化软件开发新范式">
      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">核心理念</h2>
      <p className="mb-5 text-[#4a4a4a]">
        传统的软件开发流程以人为核心，AI 作为辅助工具。而 <strong className="text-[#a0522d]">AI-Centric Workflow</strong> 
        将 AI Agent 提升为核心执行者，人类角色转变为决策者与审查者。这种范式转变带来了：
      </p>
      <ul className="list-disc list-inside mb-5 text-[#4a4a4a] ml-4 space-y-1">
        <li>更快的迭代速度 - AI 可以 24/7 不间断工作</li>
        <li>更低的重复性工作负担 - 自动化代码生成、测试、部署</li>
        <li>更一致的代码质量 - 标准化的工作流程</li>
        <li>更好的人类-AI协作 - Human in the loop + Agent in the loop</li>
      </ul>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">系统架构</h2>
      <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-8 rounded-lg mb-8">
        <div className="font-['Noto_Serif_SC',serif] text-lg font-medium text-center mb-6">AI Agent 枢纽中心与周边系统</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#6b4c9a] text-white p-4 rounded text-center col-span-2">🤖 AI Agent Hub<br/><small className="opacity-80">MCP / API Gateway</small></div>
          <div className="bg-[#2563eb] text-white p-4 rounded text-center">📝 Wiki<br/><small className="opacity-80">DeepWiki</small></div>
          <div className="bg-[#2563eb] text-white p-4 rounded text-center">💻 GitHub<br/><small className="opacity-80">Code</small></div>
          <div className="bg-[#059669] text-white p-4 rounded text-center">💾 Database</div>
          <div className="bg-[#ea580c] text-white p-4 rounded text-center">🔄 CI/CD</div>
        </div>
      </div>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">标准化流程管道</h2>
      {[
        { num: 1, title: '原始需求 - Proposal', desc: '人类提出原始需求，可包含功能描述、用户故事、技术约束等', status: '提出' },
        { num: 2, title: '产品/设计变更 - Review', desc: 'AI 生成产品方案和设计稿，人类审查确认方向正确', status: '审查' },
        { num: 3, title: '程序/软件/架构变更 - Implementation', desc: 'AI 执行代码变更，包括架构设计、代码实现、文档更新', status: '实现' },
        { num: 4, title: '测试验证报告 - Verification', desc: 'AI 执行 E2E 测试、性能测试、安全扫描，生成验证报告', status: '验证' },
        { num: 5, title: '发布 - Deployment', desc: '通过审查后，自动部署到生产环境', status: '完成' },
      ].map((step) => (
        <div key={step.num} className="flex items-center gap-4 p-4 bg-[#faf9f7] rounded border-l-4 border-[#8b4513] mb-2">
          <div className="w-8 h-8 bg-[#8b4513] text-white rounded-full flex items-center justify-center font-semibold shrink-0">{step.num}</div>
          <div className="flex-1">
            <div className="font-semibold text-[#1a1a1a]">{step.title}</div>
            <div className="text-sm text-[#6b6b6b]">{step.desc}</div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            step.status === '完成' ? 'bg-gray-200 text-gray-700' : 
            step.status === '审查' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>{step.status}</span>
        </div>
      ))}

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">关键技术组件</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { title: '🤖 AI Agent Hub', items: ['MCP (Model Context Protocol)', 'API Gateway', 'Agent Orchestration'] },
          { title: '📚 知识管理', items: ['DeepWiki - 代码理解', 'Context7 - 上下文检索', '文档自动生成'] },
          { title: '🔄 持续集成', items: ['CircleCI 流水线', '自动代码审查', '安全扫描集成'] },
          { title: '☸️ 智能部署', items: ['Kubernetes 编排', '蓝绿部署', '自动回滚'] },
        ].map((item, i) => (
          <div key={i} className="bg-[#f3f1ed] border border-[#d4d1ca] p-5 rounded">
            <h3 className="font-['Noto_Serif_SC',serif] text-base font-medium text-[#8b4513] mb-3">{item.title}</h3>
            <ul className="text-sm text-[#4a4a4a] space-y-1">
              {item.items.map((x, j) => <li key={j}>• {x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </DocumentLayout>
  );
}
