export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm text-slate-400">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Hoàng Văn Lộc. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">Tailwind</span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
