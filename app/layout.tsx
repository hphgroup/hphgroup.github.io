import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const baseUrl = new URL("https://hphitaku.github.io/");
  const title = "株式会社HPH";
  const description =
    "感謝を込めて感動を届ける。株式会社HPHは、神戸市で訪問鍼灸マッサージ事業、デイサービス事業、保険外の生活サポート事業を展開しています。採用情報も掲載しています。";

  return {
    metadataBase: baseUrl,
    title,
    description,
    applicationName: "株式会社HPH",
    icons: {
      icon: "/hph-logo-transparent.png",
      shortcut: "/hph-logo-transparent.png",
    },
    openGraph: {
      title,
      description,
      siteName: "株式会社HPH",
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
