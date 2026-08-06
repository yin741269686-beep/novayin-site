import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = `${protocol}://${host}`;

  return {
    title: "Nova｜实体行业 AI 落地与新媒体增长",
    description: "Nova 尹阳阳阳儿，专注酒店、民宿、文旅及实体企业的 AI 应用、业务 SOP 与新媒体增长系统。",
    icons: {
      icon: "/favicon.jpg",
      shortcut: "/favicon.jpg",
    },
    openGraph: {
      title: "Nova｜让 AI 进入业务，而不只停在演示里",
      description: "实体行业 AI 落地、业务 SOP 与新媒体增长系统。",
      images: [{ url: `${base}/og.png`, width: 1733, height: 908, alt: "Nova 个人网站分享封面" }],
      locale: "zh_CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nova｜让 AI 进入业务，而不只停在演示里",
      description: "实体行业 AI 落地、业务 SOP 与新媒体增长系统。",
      images: [`${base}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
