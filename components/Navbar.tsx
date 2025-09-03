"use client";

const items = [
  { id: "home", label: "Home" },
  { id: "value", label: "Giá trị" },
  { id: "projects", label: "Dự án" },
  { id: "timeline", label: "Kinh nghiệm" },
  { id: "about", label: "About" },
  { id: "contact", label: "Liên hệ" }
];

export default function Navbar() {
  return (
    <header className="sticky top-1 z-40 mx-auto mt-2 flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
      <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
        <span className="inline-block h-3 w-3 rounded-full bg-violet-500" />
        HVL
      </a>
      <nav className="hidden gap-4 md:flex">
        {items.map((n) => (
          <a key={n.id} href={`#${n.id}`} className="rounded-full px-3 py-1 text-sm text-slate-200 hover:bg-white/10">
            {n.label}
          </a>
        ))}
      </nav>
      <a href="mailto:hoanglocit1010@gmail.com" className="rounded-full bg-violet-600/90 px-3 py-1.5 text-sm font-medium text-white hover:bg-violet-500">
        Liên hệ
      </a>
    </header>
  );
}
