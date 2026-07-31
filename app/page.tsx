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
          <img src="/hph-logo-transparent.png" alt="株式会社HPH" />
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="/about">私たちについて</a>
          <a href="/business">事業紹介</a>
          <a href="/recruit">採用情報</a>
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
            ["01", "私たちについて", "/about"],
            ["02", "事業紹介", "/business"],
            ["03", "HPHの文化", "/culture"],
            ["04", "採用情報", "/recruit"],
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
          <img src="/hph-team.jpg" alt="屋外で対話するHPHスタッフ" />
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
            医療・介護を通じて、
            <br />
            関わるすべての人に価値を届ける会社へ。
          </p>
          <div className="hero-buttons">
            <a href="/business">事業内容を見る <Arrow /></a>
            <a href="/recruit">採用情報を見る <Arrow /></a>
          </div>
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
            <h2>関わるすべての人に、<br />感動を届ける。</h2>
            <p className="statement-lead">
              HPHは、多くの人との繋がりの中で成り立っています。
            </p>
            <p>
              利用者様、ご家族、地域の皆様、スタッフ、関係者の皆様。
              すべての出会いや支えに感謝し、期待を超える価値を届けることで「感動」を生み出す。
              それがHPHの大切にしている考え方です。
            </p>
            <a className="text-link" href="/about">HPHの理念を見る <Arrow /></a>
          </div>
        </div>
        <div className="values-heading reveal">
          <span>HPH VALUE</span>
          <h3>HPHが大切にする <em>4つ</em> の価値観</h3>
        </div>
        <div className="values reveal">
          <article>
            <strong>01</strong>
            <div><span>GRATITUDE</span><h3>感謝</h3><p>人とのつながりへの感謝を忘れず、相手の立場に立って誠実な行動を積み重ねます。</p><p className="value-accent">利用者様・ご家族・地域・仲間への感謝を大切にします。</p></div>
          </article>
          <article>
            <strong>02</strong>
            <div><span>PROFESSIONAL</span><h3>プロ意識</h3><p>誇りと責任を持ち、専門職として学び続け、安心して任せていただける存在を目指します。</p><p className="value-accent">常に学び続け、質の高いサービスを追求します。</p></div>
          </article>
          <article>
            <strong>03</strong>
            <div><span>SOLUTION</span><h3>課題解決</h3><p>目の前の課題だけでなく原因を考え、より良い方法を提案・実践し、解決へと導きます。</p><p className="value-accent">「できない理由」ではなく、「どうすればできるか」を考えます。</p></div>
          </article>
          <article>
            <strong>04</strong>
            <div><span>CHALLENGE</span><h3>挑戦</h3><p>現状に満足せず、新しい価値を創造するために挑戦を続け、未来を切り拓きます。</p><p className="value-accent">変化を恐れず、より良い未来のために挑戦し続けます。</p></div>
          </article>
        </div>
        <div className="care-detail reveal">
          <img src="/hph-support.jpg" alt="利用者様の手を取って寄り添うHPHスタッフ" />
          <p><span>CARE IN EVERY MOMENT</span>一つひとつの関わりに、安心と温かさを。</p>
        </div>
      </section>

      <section className="business" id="business">
        <div className="business-heading reveal">
          <p className="section-label light"><span>02</span> OUR BUSINESS</p>
          <h2>暮らしのそばで、<br />健康と安心を支える。</h2>
          <p>現在の事業を基盤に、地域医療介護企業としての未来を目指します。</p>
        </div>
        <article className="business-card business-card-photo reveal">
          <div className="business-photo">
            <img src="/hph-acupuncture.jpg" alt="利用者様への訪問鍼灸施術" />
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
        <a className="business-more reveal" href="/business">事業内容を詳しく見る <Arrow /></a>
      </section>

      <section className="recruit" id="recruit">
        <div className="recruit-image reveal">
          <img src="/hph-therapist.jpg" alt="利用者様に向き合うHPHスタッフ" />
        </div>
        <div className="recruit-copy reveal">
          <p className="section-label"><span>03</span> RECRUIT</p>
          <h2>「ありがとう」が、<br />次の力になる。</h2>
          <p>
            技術や経験だけではなく、人を想う姿勢や成長する意欲を大切にしています。
            一人ひとりの成長が組織の力となり、その力が地域への価値提供につながります。
          </p>
          <a className="round-link" href="/recruit">
            <span>採用情報を<br />詳しく見る</span><Arrow />
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
        <div className="footer-logo"><img src="/hph-logo-transparent.png" alt="株式会社HPH" /></div>
        <p>〒655-0012 兵庫県神戸市垂水区向陽2丁目6-18<br />向陽センタービル103</p>
        <div className="footer-links">
          <a href="/about">私たちについて</a>
          <a href="/business">事業紹介</a>
          <a href="/culture">HPHの文化</a>
          <a href="/recruit">採用情報</a>
          <a href="#company">会社概要</a>
        </div>
        <div className="footer-bottom">
          <span>HPHの実際の施術・スタッフ写真を掲載しています。</span>
          <small>© 2026 HPH Inc.</small>
        </div>
      </footer>
    </main>
  );
}
