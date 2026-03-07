'use client';

interface DocumentSectionProps {
  children: React.ReactNode;
  title: string;
  num?: string;
}

export function DocumentSection({ children, title, num }: DocumentSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="font-['Noto_Serif_SC',serif] text-2xl font-medium text-[#8b4513] mb-6 pb-3 border-b border-[#d4d1ca] flex items-baseline gap-3">
        {num && <span className="text-sm text-[#cd853f] font-medium">{num}</span>}
        {title}
      </h2>
      {children}
    </section>
  );
}

interface DocumentCardProps {
  title: string;
  children: React.ReactNode;
}

export function DocumentCard({ title, children }: DocumentCardProps) {
  return (
    <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-6 rounded">
      <div className="font-semibold text-[#8b4513] mb-3">{title}</div>
      <div className="text-[#4a4a4a]">{children}</div>
    </div>
  );
}

interface DocumentFormulaProps {
  formula: string;
  desc?: string;
}

export function DocumentFormula({ formula, desc }: DocumentFormulaProps) {
  return (
    <div className="bg-[#f3f1ed] border border-[#d4d1ca] p-7 my-8 text-center">
      <div className="font-['Times_New_Roman',serif] text-2xl text-[#1a1a1a] tracking-wide" dangerouslySetInnerHTML={{ __html: formula }} />
      {desc && <div className="mt-3 text-sm text-[#6b6b6b] italic">{desc}</div>}
    </div>
  );
}

interface DocumentHighlightBoxProps {
  title: string;
  children: React.ReactNode;
}

export function DocumentHighlightBox({ title, children }: DocumentHighlightBoxProps) {
  return (
    <div className="bg-gradient-to-r from-[#e8e5df] to-[#f3f1ed] border-l-4 border-[#8b4513] p-5 my-8">
      <div className="text-xs uppercase tracking-widest text-[#8b4513] font-semibold mb-2">{title}</div>
      <div className="text-[#1a1a1a]">{children}</div>
    </div>
  );
}

export function DocumentIntro({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl text-[#4a4a4a] leading-relaxed mb-10 p-6 bg-[#f3f1ed] border-l-4 border-[#8b4513]">
      {children}
    </p>
  );
}

export function DocumentTwoColumn({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">{children}</div>;
}
