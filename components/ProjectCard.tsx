// components/ProjectCard.tsx
"use client";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { StackList } from "./Primitives";

export default function ProjectCard({ project, flip } : { project: Project, flip?: boolean }) {
  const hasMono = !!project.links.repo;
  const hasFE = !!project.links.repoFE;
  const hasBE = !!project.links.repoBE;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 70, damping: 16 }}
      className={"grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 " + (flip ? "md:[&>div:first-child]:order-2" : "")}
    >
      <div>
        <div className="aspect-video overflow-hidden rounded-xl bg-black/30 ring-1 ring-white/10">
          {project.image ? (
            <img src={project.image} alt={project.name} className="h-full w-full object-cover hover:scale-[1.02] transition" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-400">Screenshot placeholder</div>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">{project.name}</h3>
        {project.tagline && (<p className="mt-1 text-sm text-violet-300/90">{project.tagline}</p>)}
        <p className="mt-2 text-slate-300">{project.description}</p>

        <div className="mt-4 space-y-3">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-200">Tech Stack</p>
            <StackList items={project.stack} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-200">Điểm nổi bật</p>
            <ul className="list-disc pl-5 text-slate-300">
              {project.highlights.map((h) => <li key={h} className="marker:text-violet-400">{h}</li>)}
            </ul>
          </div>
          {project.impact && project.impact.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-200">Tác động (demo/placeholder)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.impact.map((im) => (
                  <div key={im.label} className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="text-sm text-slate-300">{im.label}</p>
                    <p className="text-lg font-semibold text-white">{im.value}</p>
                    {im.note && <p className="text-xs text-slate-400">{im.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {hasMono && (
            <a href={project.links.repo!} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-300">
              {/* GitHub icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.25 9.25 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.96-2.33 4.83-4.55 5.09.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
              GitHub Repo
            </a>
          )}
          {!hasMono && hasFE && (
            <a href={project.links.repoFE!} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68..."/></svg>
              {hasBE ? "Frontend Repo" : "GitHub Repo"}
            </a>
          )}
          {!hasMono && hasBE && (
            <a href={project.links.repoBE!} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
              {hasFE ? "Backend Repo" : "GitHub Repo"}
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
              Live Demo
            </a>
          )}
        </div>

        <p className="mt-3 text-xs text-slate-400">Khoảng thời gian: {project.period}</p>
      </div>
    </motion.article>
  );
}
