import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "株式会社HPH｜神戸市の訪問鍼灸マッサージ・デイサービス";
  const description =
    "感謝を込めて感動を届ける。株式会社HPHは、神戸市垂水区で訪問鍼灸マッサージ事業とデイサービス事業を展開しています。採用情報も掲載しています。";

  return {
    metadataBase: baseUrl,
    title,
    description,
    icons: {
      icon: "/hph-logo.jpg",
      shortcut: "/hph-logo.jpg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ja_JP",
      images: [{ url: new URL("/og-v2.png", baseUrl).toString(), width: 1200, height: 630, alt: "株式会社HPH 感謝を込めて、感動を届ける。" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og-v2.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
