export function Pill({ children } : { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{children}</span>;
}

export function StackList({ items } : { items: string[] }) {
  return <div className="flex flex-wrap gap-2">{items.map((it) => <Pill key={it}>{it}</Pill>)}</div>;
}
