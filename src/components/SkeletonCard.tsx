'use client';

export default function SkeletonCard() {
  return (
    <div className="vintage-border bg-cream/80 p-5 animate-pulse">
      <div className="h-8 w-8 bg-warm-brown/20 rounded mb-3" />
      <div className="h-4 w-20 bg-warm-brown/20 rounded mb-2" />
      <div className="h-6 w-16 bg-warm-brown/30 rounded" />
    </div>
  );
}
