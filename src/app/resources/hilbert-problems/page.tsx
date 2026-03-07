'use client';

import DocumentLayout from '@/components/DocumentLayout';

const problems = [
  { num: '3', title: '等底等高四面体的体积问题', desc: '证明任意两个等底等高的四面体体积相等。', status: '已解决', year: '1900年 马克斯·德恩' },
  { num: '7', title: '某些数的无理性与超越性', desc: '证明 2^√2 是超越数。', status: '已解决', year: '1934年 格尔丰德' },
  { num: '10', title: '丢番图方程的可判定性', desc: '给定一个丢番图方程，判断是否存在整数解。', status: '已解决', year: '1970年 马蒂亚塞维奇' },
  { num: '14', title: '代数不变量的有限性', desc: '证明某些代数形式环的有限性。', status: '已解决', year: '1959年 Nagata' },
  { num: '17', title: '正定形式的有限表示', desc: '证明正定代数形式可以写成有限个平方和。', status: '已解决', year: '1926年 阿廷' },
  { num: '18', title: '空间填充曲线与晶体对称群', desc: '研究空间中的点集构成和晶体群结构。', status: '已解决', year: '1910年 Bieberbach' },
];

const partialProblems = [
  { num: '1', title: '连续统假设', desc: '证明不存在基数介于整数和实数之间的集合。', status: '部分解决', year: '1940年 哥德尔证明不可判定' },
  { num: '2', title: '算术公理的相容性', desc: '证明算术公理系统不会导出矛盾。', status: '部分解决', year: '1931年 哥德尔不完备定理' },
  { num: '5', title: '李群连续变换群的可微性假设', desc: '研究李群的拓扑结构与可微性。', status: '部分解决', year: '1952年 解决' },
  { num: '6', title: '物理学的公理化', desc: '将物理学的核心领域建立在严格公理基础上。', status: '部分解决', year: '部分解决，仍在研究中' },
  { num: '8', title: '素数问题（黎曼猜想）', desc: '素数分布规律，包括黎曼猜想等。', status: '未解决', year: '未解决' },
];

export default function HilbertProblemsPage() {
  return (
    <DocumentLayout title="希尔伯特23问" subtitle="Hilbert's 23 Problems - 1900年提出的23个数学挑战">
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-5 rounded text-center">
          <div className="text-4xl font-semibold text-[#8b4513]">10</div>
          <div className="text-sm text-[#6b6b6b] mt-2">已解决</div>
        </div>
        <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-5 rounded text-center">
          <div className="text-4xl font-semibold text-[#8b4513]">10</div>
          <div className="text-sm text-[#6b6b6b] mt-2">部分解决</div>
        </div>
        <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-5 rounded text-center">
          <div className="text-4xl font-semibold text-[#8b4513]">3</div>
          <div className="text-sm text-[#6b6b6b] mt-2">未解决</div>
        </div>
      </div>

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca]">已解决的问题 (10个)</h2>
      {problems.map((p) => (
        <div key={p.num} className="grid grid-cols-[50px_1fr] gap-5 py-5 border-b border-[#d4d1ca]">
          <span className="text-lg font-semibold text-[#8b4513]">{p.num}</span>
          <div>
            <div className="font-medium text-[#1a1a1a] mb-2">{p.title}</div>
            <div className="text-sm text-[#4a4a4a] mb-2">{p.desc}</div>
            <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">{p.year}</span>
          </div>
        </div>
      ))}

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca] mt-10">部分解决/有争议 (10个)</h2>
      {partialProblems.map((p) => (
        <div key={p.num} className="grid grid-cols-[50px_1fr] gap-5 py-5 border-b border-[#d4d1ca]">
          <span className="text-lg font-semibold text-[#8b4513]">{p.num}</span>
          <div>
            <div className="font-medium text-[#1a1a1a] mb-2">{p.title}</div>
            <div className="text-sm text-[#4a4a4a] mb-2">{p.desc}</div>
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">{p.year}</span>
          </div>
        </div>
      ))}

      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca] mt-10">希尔伯特的故事</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-5 rounded">
          <div className="font-semibold text-[#8b4513] mb-3">23个问题的诞生</div>
          <div className="text-sm text-[#4a4a4a]">
            1900年8月8日，希尔伯特在巴黎国际数学家大会上发表了著名的演讲《数学问题》。他提出了23个数学问题，这些问题涵盖了数学的各个领域，旨在为20世纪数学研究指明方向。
          </div>
        </div>
        <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-5 rounded">
          <div className="font-semibold text-[#8b4513] mb-3">希尔伯特的信念</div>
          <div className="text-sm text-[#4a4a4a]">
            希尔伯特曾说过："我们必须知道，我们必将知道。"（Wir müssen wissen, wir werden wissen）这句名言体现了他对数学真理的坚定信念，也成为激励后世数学家的座右铭。
          </div>
        </div>
      </div>
    </DocumentLayout>
  );
}
