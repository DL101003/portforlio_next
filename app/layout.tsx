import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoàng Văn Lộc — Web Developer (React/Spring Boot)",
  description: "Portfolio one-page. React, Tailwind, Framer Motion.",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-dvh bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  );
}
