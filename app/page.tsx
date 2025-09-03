"use client";

import Section from "@/components/Section";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects, skills } from "@/lib/data";
import { StackList } from "@/components/Primitives";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0D10] font-[Inter] text-slate-200">
      <ScrollProgress />
      <Navbar />

      <Section id="home">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-teal-500/10 p-8 md:p-14">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">Hoàng Văn Lộc — Web Developer</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-200">
            Mình thiết kế & xây web app <span className="font-semibold text-white">mượt, nhanh, có ích</span> với
            <span className="font-medium"> React</span> & <span className="font-medium">Spring Boot</span>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-slate-100">Xem dự án</a>
            <a href="#value" className="rounded-full border border-white/20 bg-transparent px-5 py-2 text-sm font-semibold text-white hover:bg-white/10">Năng lực cốt lõi</a>
            <a href="mailto:hoanglocit1010@gmail.com" className="rounded-full bg-violet-600/90 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-500">Email mình</a>
          </div>
        </div>
      </Section>

      <Section id="value" title="Giá trị mình mang lại" subtitle="UI rõ ràng, độ trễ thấp, dễ mở rộng. API chuẩn hoá, bảo mật JWT/Spring Security. Triển khai gọn bằng Docker; review kỹ, viết docs mạch lạc.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Frontend</h3>
            <StackList items={skills.frontend} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Backend</h3>
            <StackList items={skills.backend} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Ops & Database</h3>
            <StackList items={[...skills.ops, ...skills.db]} />
          </div>
        </div>
      </Section>

      <Section id="projects" title="Dự án tiêu biểu" subtitle="Hai dự án gần nhất cho thấy cách mình chuyển yêu cầu thành sản phẩm mượt và đáng tin cậy.">
        <div className="space-y-10">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} flip />
        </div>
      </Section>

      <Section id="timeline" title="Kinh nghiệm" subtitle="VNPT TPHCM — Backend Developer Intern (05–07/2025)">
        <div className="relative ml-4 border-l border-white/10 pl-6">
          {[
            {
              title: "Backend Developer Intern — VNPT TPHCM",
              time: "May 2025 – Jul 2025",
              points: [
                "Viết tài liệu kỹ thuật, cải thiện onboarding",
                "Tham gia sprint Agile, giao tính năng đúng hạn",
                "Review code, nâng maintainability",
                "Cải thiện UX thông qua tối ưu backend"
              ]
            }
          ].map((t) => (
            <div key={t.title} className="mb-8">
              <div className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full border-2 border-white/30 bg-violet-500" />
              <h4 className="text-xl font-semibold text-white">{t.title}</h4>
              <p className="text-sm text-slate-400">{t.time}</p>
              <ul className="mt-2 list-disc pl-5 text-slate-300">
                {t.points.map((p) => <li key={p} className="marker:text-violet-400">{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" title="Về mình" subtitle="Ưu tiên tính dễ hiểu & dễ dùng. Quy trình: hiểu bài toán → kiến trúc → triển khai → đo lường & tối ưu.">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Nguyên tắc làm việc</h3>
            <ol className="mt-2 list-decimal pl-5 text-slate-300">
              <li>Đồng cảm người dùng & rõ yêu cầu</li>
              <li>Kiến trúc module hóa, standard hoá API</li>
              <li>Đo lường (Core Web Vitals, response time)</li>
              <li>Tối ưu liên tục & viết tài liệu</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Kỹ năng & Công cụ</h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-slate-200">Ngôn ngữ</p>
                <StackList items={["Java", "JavaScript", "SQL"]} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">Đang học/Quan tâm</p>
                <StackList items={["CI/CD", "Testing e2e", "TypeScript"]} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" title="Giáo dục & Chứng chỉ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Cử nhân Kỹ thuật Phần mềm</h3>
            <p className="text-slate-300">HUTECH (2021–2025) • GPA 3.33/4.0</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Chứng chỉ</h3>
            <p className="text-slate-300">Udemy 2024 Web Dev Bootcamp • TOEIC 600</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Giải thưởng/Hoạt động</h3>
            <p className="text-slate-300">Finalist IT Got Talent với dự án REUZIT</p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Kết nối cùng mình" subtitle="Mở sẵn một slot call 15 phút để trao đổi cơ hội hợp tác.">
        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:hoanglocit1010@gmail.com" className="rounded-full bg-violet-600/90 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-500">hoanglocit1010@gmail.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10">GitHub</a>
          <a href="#" className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10">LinkedIn</a>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
