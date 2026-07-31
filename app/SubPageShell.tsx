import type { ReactNode } from "react";

type Props = {
  number: string;
  english: string;
  title: string;
  lead: string;
  children: ReactNode;
};

export default function SubPageShell({ number, english, title, lead, children }: Props) {
  return (
    <main className="subpage">
      <header className="sub-header">
        <a href="/" className="sub-brand"><img src="/hph-logo.jpg" alt="株式会社HPH" /></a>
        <nav>
          <a href="/about">HPHについて</a>
          <a href="/business">事業紹介</a>
          <a href="/culture">HPHの文化</a>
          <a href="/recruit">採用情報</a>
        </nav>
        <a className="sub-contact" href="tel:0787548576">CONTACT</a>
      </header>
      <section className="sub-hero">
        <p><span>{number}</span> {english}</p>
        <h1>{title}</h1>
        <div className="sub-hero-lead">{lead}</div>
        <div className="sub-orbit" /><div className="sub-orbit sub-orbit-small" />
      </section>
      <div className="sub-content">{children}</div>
      <section className="sub-cta">
        <p>MAKE A HAPPY FUTURE WITH YOU</p>
        <h2>共に、地域へ価値を。</h2>
        <div>
          <a href="/recruit">採用情報を見る <span>↗</span></a>
          <a href="tel:0787548576">お問い合わせ <span>↗</span></a>
        </div>
      </section>
      <footer className="sub-footer">
        <img src="/hph-logo.jpg" alt="株式会社HPH" />
        <p>〒655-0012 兵庫県神戸市垂水区向陽2丁目6-18 向陽センタービル103</p>
        <small>© 2026 HPH Inc.</small>
      </footer>
    </main>
  );
}
