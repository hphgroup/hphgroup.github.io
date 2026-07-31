"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#top" className="brand" aria-label="株式会社HPH トップへ" onClick={closeMenu}>
          <img src="/hph-logo.jpg" alt="株式会社HPH" />
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#vision">私たちについて</a>
          <a href="#business">事業紹介</a>
          <a href="#recruit">採用情報</a>
          <a href="#company">会社概要</a>
        </nav>
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="global-menu"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <span /><span />
          <small>MENU</small>
        </button>
      </header>

      <div className={`global-menu ${menuOpen ? "is-open" : ""}`} id="global-menu" aria-hidden={!menuOpen}>
        <nav aria-label="メニューナビゲーション">
          {[
            ["01", "私たちについて", "#vision"],
            ["02", "事業紹介", "#business"],
            ["03", "採用情報", "#recruit"],
            ["04", "会社概要", "#company"],
          ].map(([number, label, href]) => (
            <a href={href} onClick={closeMenu} key={href}>
              <span>{number}</span><strong>{label}</strong><Arrow />
            </a>
          ))}
        </nav>
        <div className="menu-contact">
          <p>CONTACT</p>
          <a href="tel:0787548576">078-754-8576</a>
          <span>兵庫県神戸市垂水区向陽2丁目6-18</span>
        </div>
      </div>

      <section className="hero" id="top">
        <div className="hero-image">
          <img src="/care-team.jpg" alt="ケアスタッフと利用者の笑顔" />
        </div>
        <div className="hero-shape shape-a" />
        <div className="hero-shape shape-b" />
        <div className="hero-copy">
          <p className="hero-kicker"><span>HUMANITY</span><span>PASSION</span><span>HAPPINESS</span></p>
          <h1>
            <span className="line-mask"><b>感謝を込めて、</b></span>
            <span className="line-mask"><b>感動を届ける。</b></span>
          </h1>
          <p className="hero-lead">
            医療と介護の力で、
            <br />
            一人ひとりの「その人らしい毎日」を。
          </p>
        </div>
        <div className="hero-side">MAKE A HAPPY FUTURE WITH YOU</div>
        <a href="#vision" className="scroll">
          <span>SCROLL</span><i />
        </a>
      </section>

      <section className="statement" id="vision">
        <div className="marquee" aria-hidden="true">
          <div>HUMANITY · PASSION · HAPPINESS · HUMANITY · PASSION · HAPPINESS ·&nbsp;</div>
          <div>HUMANITY · PASSION · HAPPINESS · HUMANITY · PASSION · HAPPINESS ·&nbsp;</div>
        </div>
        <div className="statement-inner reveal">
          <p className="section-label"><span>01</span> OUR VISION</p>
          <div>
            <h2>人の想いが、<br />地域の幸せをつくる。</h2>
            <p className="statement-lead">
              私たちHPHは、人と人とのつながりを大切にする
              <strong>ヘルスケアカンパニー</strong>です。
            </p>
            <p>
              思いやりを持って一人ひとりに向き合い、情熱を持ってより良い支援を追求する。
              医療・介護を通じて、ご利用者さま、ご家族、地域、そして働く仲間の幸福を育みます。
            </p>
          </div>
        </div>
        <div className="values reveal">
          <article><strong>H</strong><div><span>HUMANITY</span><h3>人情</h3><p>温かな心で、人に寄り添う。</p></div></article>
          <article><strong>P</strong><div><span>PASSION</span><h3>情熱</h3><p>より良い未来へ、挑み続ける。</p></div></article>
          <article><strong>H</strong><div><span>HAPPINESS</span><h3>幸福</h3><p>関わるすべての人を、笑顔に。</p></div></article>
        </div>
      </section>

      <section className="business" id="business">
        <div className="business-heading reveal">
          <p className="section-label light"><span>02</span> OUR BUSINESS</p>
          <h2>暮らしのそばで、<br />健康と安心を支える。</h2>
          <p>神戸市垂水区を拠点に、2つの事業を展開しています。</p>
        </div>
        <article className="business-card business-card-photo reveal">
          <div className="business-photo">
            <img src="/massage-care.jpg" alt="高齢者へのマッサージ施術イメージ" />
          </div>
          <div className="business-copy">
            <span className="business-number">01</span>
            <p>HOME-VISIT ACUPUNCTURE &amp; MASSAGE</p>
            <h3>訪問鍼灸<br />マッサージ事業</h3>
            <p className="body-copy">
              ご自宅や施設へ訪問し、身体の状態や生活環境に合わせたケアを提供。
              通院が難しい方の心身に寄り添い、毎日の暮らしを支えます。
            </p>
          </div>
        </article>
        <article className="business-card business-card-color reveal">
          <div className="business-copy">
            <span className="business-number">02</span>
            <p>DAY SERVICE</p>
            <h3>デイサービス事業</h3>
            <p className="body-copy">
              安心して過ごせる居場所と、その方らしい生活につながる時間を提供。
              人との交流や活動を通じて、いきいきとした毎日をサポートします。
            </p>
          </div>
          <div className="day-visual" aria-hidden="true">
            <div className="day-circle"><span>つながる</span><b>笑顔</b><small>地域とともに</small></div>
            <i /><i /><i />
          </div>
        </article>
      </section>

      <section className="recruit" id="recruit">
        <div className="recruit-image reveal">
          <img src="/care-team.jpg" alt="利用者と笑顔で接するケアスタッフ" />
        </div>
        <div className="recruit-copy reveal">
          <p className="section-label"><span>03</span> RECRUIT</p>
          <h2>「ありがとう」が、<br />次の力になる。</h2>
          <p>
            技術や経験だけではなく、目の前の人を大切にできる気持ちを歓迎します。
            HPHで、地域の未来を支える仲間になりませんか。
          </p>
          <a className="round-link" href="tel:0787548576">
            <span>採用について<br />問い合わせる</span><Arrow />
          </a>
        </div>
        <div className="recruit-bg-text" aria-hidden="true">WORK WITH HPH</div>
      </section>

      <section className="company" id="company">
        <div className="company-title reveal">
          <p className="section-label"><span>04</span> COMPANY</p>
          <h2>会社概要</h2>
          <div className="company-mark">HPH</div>
        </div>
        <dl className="reveal">
          <div><dt>会社名</dt><dd>株式会社HPH</dd></div>
          <div><dt>事業内容</dt><dd>訪問鍼灸マッサージ事業<br />デイサービス事業</dd></div>
          <div><dt>所在地</dt><dd>〒655-0012<br />兵庫県神戸市垂水区向陽2丁目6-18<br />向陽センタービル103</dd></div>
          <div><dt>連絡先</dt><dd>TEL：<a href="tel:0787548576">078-754-8576</a><br />FAX：078-754-8580</dd></div>
        </dl>
      </section>

      <section className="contact">
        <p>CONTACT US</p>
        <h2>ご相談・採用について、<br />お気軽にお問い合わせください。</h2>
        <a href="tel:0787548576"><span>078-754-8576</span><Arrow /></a>
      </section>

      <footer>
        <div className="footer-logo"><img src="/hph-logo.jpg" alt="株式会社HPH" /></div>
        <p>〒655-0012 兵庫県神戸市垂水区向陽2丁目6-18<br />向陽センタービル103</p>
        <div className="footer-links">
          <a href="#vision">私たちについて</a>
          <a href="#business">事業紹介</a>
          <a href="#recruit">採用情報</a>
          <a href="#company">会社概要</a>
        </div>
        <div className="footer-bottom">
          <span>掲載写真はイメージです。</span>
          <small>© 2026 HPH Inc.</small>
        </div>
      </footer>
    </main>
  );
}
