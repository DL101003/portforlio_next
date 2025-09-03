export type Impact = { label: string; value: string; note?: string };

export type Project = {
  name: string;
  tagline?: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
  impact?: Impact[];
  image?: string;
  links: { repo?: string; demo?: string };
};

export const projects: Project[] = [
  {
    name: "HomiLux — Event Management Platform",
    tagline: "Full‑stack React ↔ Spring Boot, auth & caching, state management tối ưu",
    period: "May 2025 – Present",
    description:
      "Thiết kế kiến trúc full‑stack, xây REST APIs với Spring Boot, xác thực & phân quyền bằng Spring Security + JWT; Redis caching & indexing; frontend với TanStack Router/Query + Zustand.",
    stack: [
      "React",
      "TanStack Router",
      "React Query",
      "Zustand",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Docker"
    ],
    highlights: [
      "Kiến trúc client–server rõ ràng, module hóa",
      "Auth & Authorization (Spring Security + JWT)",
      "Redis caching giúp tối ưu query & response"
    ],
    impact: [
      { label: "Response time", value: "↓ 40–60%", note: "placeholder, cập nhật khi có đo đạc" },
      { label: "Engagement", value: "↑ ?%", note: "placeholder" }
    ],
    image: "/images/homilux-placeholder.jpg",
    links: {
      repo: "#", // TODO: Dán link GitHub HomiLux
      demo: ""
    }
  },
  {
    name: "REUZIT — Second-hand Item Exchange",
    tagline: "Realtime chat WebSocket, AI assistant gợi ý, bảo mật JWT",
    period: "Oct 2024 – Dec 2024",
    description:
      "Xây chat realtime bằng WebSocket, tích hợp AI gợi ý, tăng cường bảo mật JWT. Dự án 3 thành viên, phụ trách chính phần frontend và phối hợp backend.",
    stack: ["React", "Spring Boot", "PostgreSQL", "WebSocket", "JWT"],
    highlights: [
      "Chat realtime ổn định với WebSocket",
      "AI assistant hỗ trợ người dùng",
      "Triển khai cross‑platform, tối ưu trải nghiệm"
    ],
    impact: [{ label: "Time to first message", value: "< 400ms", note: "demo nội bộ" }],
    image: "/images/reuzit-placeholder.jpg",
    links: {
      repo: "#", // TODO: Dán link GitHub REUZIT
      demo: ""
    }
  }
];

export const skills = {
  frontend: ["React", "TanStack Router", "React Query", "Zustand", "Tailwind"],
  backend: ["Spring Boot", "REST", "JWT", "Spring Security"],
  ops: ["Docker", "Git", "GitHub"],
  db: ["MySQL", "PostgreSQL"],
  misc: ["WebSocket", "TypeScript (đang bổ sung)"]
};
