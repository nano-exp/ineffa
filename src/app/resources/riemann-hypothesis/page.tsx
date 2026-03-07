'use client';

import DocumentLayout, { DocumentSection, DocumentIntro, DocumentFormula, DocumentTwoColumn, DocumentCard, DocumentHighlightBox } from '@/components/DocumentLayout';

export default function RiemannHypothesisPage() {
  return (
    <DocumentLayout title="黎曼猜想" subtitle="The Riemann Hypothesis - 探索数学史上最著名的未解之谜">
      <DocumentIntro>
        黎曼猜想是数学史上最深远、最迷人的未解之谜之一。这条由德国数学家伯恩哈德·黎曼于1859年提出的猜想，深刻揭示了素数分布的隐藏规律，被爱因斯坦誉为"数学中最深刻的真理"。
      </DocumentIntro>

      <DocumentSection title="历史背景" num="01">
        <p className="mb-5 text-[#4a4a4a]">
          1859年11月，年仅33岁的德国数学家<span className="text-[#a0522d] font-medium">伯恩哈德·黎曼</span>（Bernhard Riemann）被选为柏林科学院通讯院士。他提交了一篇仅有8页的短论文《论小于给定数的素数个数》。这篇看似简短的论文，却彻底改变了数论的面貌。
        </p>
        <p className="mb-5 text-[#4a4a4a]">
          在此之前数十年间，数学家们一直试图理解素数的分布规律。欧几里得早在两千多年前就证明了素数有无穷多个，但它们的分布却显得杂乱无章。高斯和勒让德曾猜测（后来的"素数定理"）——小于x的素数个数近似于x/ln(x)。
        </p>
      </DocumentSection>

      <DocumentSection title="黎曼ζ函数" num="02">
        <p className="mb-5 text-[#4a4a4a]">
          黎曼ζ函数是数论中最重要也最美丽的函数之一。对于复数s（实部&gt;1），它定义为：
        </p>
        <DocumentFormula
          formula="ζ(s) = Σ<sub>n=1</sub><sup>∞</sup> 1/n<sup>s</sup> = 1/1<sup>s</sup> + 1/2<sup>s</sup> + 1/3<sup>s</sup> + ⋯"
          desc="其中 s 为复数，级数在 Re(s) > 1 时收敛"
        />
        <p className="mb-5 text-[#4a4a4a]">
          欧拉在1737年发现，当s为大于1的实数时，这个无穷级数可以写成素数的无穷乘积形式——这就是著名的<span className="text-[#a0522d] font-medium">欧拉乘积公式</span>：
        </p>
        <DocumentFormula
          formula="ζ(s) = ∏<sub>p</sub> (1 - p<sup>-s</sup>)<sup>-1</sup>"
          desc="其中 p 遍历所有素数"
        />
      </DocumentSection>

      <DocumentSection title="猜想内容" num="03">
        <p className="mb-5 text-[#4a4a4a]">
          黎曼ζ函数存在两类截然不同的零点：
        </p>
        <DocumentTwoColumn>
          <DocumentCard title="平凡零点">
            位于负偶数 s = -2, -4, -6, ... 这些零点很容易理解，但并不携带关于素数的深层信息。
          </DocumentCard>
          <DocumentCard title="非平凡零点">
            位于复平面"临界带" 0 &lt; Re(s) &lt; 1 中。这些零点蕴含着素数分布的奥秘，是黎曼猜想的核心。
          </DocumentCard>
        </DocumentTwoColumn>
        <DocumentHighlightBox title="黎曼猜想">
          黎曼ζ函数 ζ(s) 的所有非平凡零点的实部都等于 1/2。<br/>
          换言之，所有非平凡零点都位于复平面的"临界线" Re(s) = 1/2 上。
        </DocumentHighlightBox>
        <p className="mb-5 text-[#4a4a4a]">
          这个表述简洁得近乎优雅的猜想，至今已困扰数学家160余年。目前，通过计算机的强力计算，人们已经验证了超过<span className="text-[#a0522d] font-medium">十万亿</span>个非平凡零点，它们全部落在临界线上——然而，这仍然只是有限个零点的验证，无法替代严格的数学证明。
        </p>
      </DocumentSection>

      <DocumentSection title="为何如此重要？" num="04">
        <p className="mb-5 text-[#4a4a4a]">
          <strong className="text-[#a0522d] font-medium">1. 素数分布的核心</strong><br/>
          素数是数学的"原子"。从密码学到量子物理，从计算机算法到数论基础，素数无处不在。黎曼猜想直接揭示了素数在宏观层面的分布规律。
        </p>
        <p className="mb-5 text-[#4a4a4a]">
          <strong className="text-[#a0522d] font-medium">2. 数学统一的纽带</strong><br/>
          黎曼ζ函数是数学中"L-函数"的原型。L-函数是连接数论、代数几何、表示论、拓扑学的核心工具。BSD猜想、朗兰兹纲领——这些现代数学的宏大理论，都与黎曼猜想有着千丝万缕的联系。
        </p>
        <p className="mb-5 text-[#4a4a4a]">
          <strong className="text-[#a0522d] font-medium">3. 方法论的宝库</strong><br/>
          160多年来，为证明黎曼猜想而发展出的数学工具和方法，已经成为数论研究的基本装备。
        </p>
      </DocumentSection>

      <DocumentSection title="当前状态" num="05">
        <p className="mb-5 text-[#4a4a4a]">
          黎曼猜想目前的状态是：<span className="bg-[#8b4513] text-white px-3 py-1 rounded-full text-xs ml-2">未被证明</span>
        </p>
        <DocumentTwoColumn>
          <DocumentCard title="零点密度">
            1974年，莱文森证明了至少40%的非平凡零点位于临界线上。
          </DocumentCard>
          <DocumentCard title="临界带研究">
            塞尔伯格证明了临界带上存在无穷多个零点。
          </DocumentCard>
        </DocumentTwoColumn>
      </DocumentSection>
    </DocumentLayout>
  );
}
