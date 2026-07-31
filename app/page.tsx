const PhoneIcon = () => <span aria-hidden="true">☎</span>;
const ArrowIcon = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="株式会社HPH トップへ">
          <img src="/hph-logo.jpg" alt="株式会社HPH" />
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#philosophy">私たちについて</a>
          <a href="#services">事業紹介</a>
          <a href="#recruit">採用情報</a>
          <a href="#company">会社概要</a>
        </nav>
        <a className="header-contact" href="tel:0787548576">
          <PhoneIcon /> 078-754-8576
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow">HUMANITY · PASSION · HAPPINESS</p>
          <h1>
            感謝を込めて、
            <br />
            <span>感動を届ける。</span>
          </h1>
          <p className="hero-lead">
            私たちは医療・介護を通じて、
            <br className="desktop-only" />
            一人ひとりの「その人らしい毎日」に寄り添います。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              私たちの事業を見る <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#recruit">
              採用情報を見る
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="手と手をつなぐ、人に寄り添う医療と介護">
          <div className="care-scene">
            <div className="care-ring ring-a" />
            <div className="care-ring ring-b" />
            <div className="care-center">
              <span className="care-heart">♥</span>
              <span>人と人を、想いでつなぐ</span>
            </div>
          </div>
          <div className="hero-note">
            <strong>HPH</strong>
            <span>神戸市垂水区から、地域の暮らしを支えます。</span>
          </div>
        </div>
        <a className="scroll-cue" href="#philosophy" aria-label="理念へスクロール">
          <span>SCROLL</span>
          <i />
        </a>
      </section>

      <section className="philosophy section" id="philosophy">
        <div className="section-heading">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h2>私たちが大切にしていること</h2>
        </div>
        <div className="philosophy-grid">
          <div className="philosophy-message">
            <p className="large-copy">
              目の前の人に、誠実に。
              <br />
              できることに、情熱を。
            </p>
            <p>
              HPHという名前には、私たちの仕事の原点となる3つの想いが込められています。
              人と人とのつながりを大切にし、情熱を持って行動し、関わるすべての方の幸福を願う。
              その積み重ねが、地域に信頼される医療・介護につながると考えています。
            </p>
          </div>
          <div className="values">
            <article>
              <span>H</span>
              <div>
                <small>HUMANITY</small>
                <h3>人情</h3>
                <p>思いやりと温かな心で、一人ひとりに向き合います。</p>
              </div>
            </article>
            <article>
              <span>P</span>
              <div>
                <small>PASSION</small>
                <h3>情熱</h3>
                <p>より良い支援を追求し、前向きに挑戦し続けます。</p>
              </div>
            </article>
            <article>
              <span>H</span>
              <div>
                <small>HAPPINESS</small>
                <h3>幸福</h3>
                <p>ご利用者さま、地域、仲間の笑顔を育みます。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h2>地域の毎日に寄り添う、2つの事業</h2>
          </div>
          <p>
            専門性とまごころを大切に、
            <br />
            住み慣れた地域での暮らしを支えます。
          </p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <div className="service-number">01</div>
            <div className="service-icon" aria-hidden="true">訪</div>
            <p className="service-en">HOME-VISIT CARE</p>
            <h3>訪問鍼灸マッサージ事業</h3>
            <p>
              ご自宅や施設へ訪問し、身体の状態や生活環境に合わせた鍼灸・マッサージを提供。
              通院が難しい方の心身に寄り添い、日常生活の維持・向上を支援します。
            </p>
            <div className="service-tags">
              <span>ご自宅・施設へ訪問</span>
              <span>個別に合わせたケア</span>
            </div>
          </article>
          <article className="service-card accent-card">
            <div className="service-number">02</div>
            <div className="service-icon" aria-hidden="true">日</div>
            <p className="service-en">DAY SERVICE</p>
            <h3>デイサービス事業</h3>
            <p>
              安心して過ごせる居場所と、その方らしい生活につながる時間を提供。
              地域とのつながりを大切にしながら、いきいきとした毎日をサポートします。
            </p>
            <div className="service-tags">
              <span>安心できる居場所</span>
              <span>生活を支える活動</span>
            </div>
          </article>
        </div>
      </section>

      <section className="recruit section" id="recruit">
        <div className="recruit-panel">
          <div className="recruit-copy">
            <p className="eyebrow light">RECRUIT</p>
            <h2>
              誰かの笑顔が、
              <br />
              自分の誇りになる仕事。
            </h2>
            <p>
              技術や経験だけではなく、目の前の人を大切にできる気持ちを歓迎します。
              HPHで、地域の未来を支える仲間になりませんか。
            </p>
            <div className="recruit-points">
              <span>人に寄り添える</span>
              <span>成長を楽しめる</span>
              <span>地域に貢献できる</span>
            </div>
            <a className="button button-white" href="tel:0787548576">
              採用について問い合わせる <ArrowIcon />
            </a>
          </div>
          <div className="recruit-quote">
            <span>“</span>
            <p>ありがとうが、次の力になる。</p>
            <small>WORK WITH HPH</small>
          </div>
        </div>
      </section>

      <section className="company section" id="company">
        <div className="section-heading">
          <p className="eyebrow">COMPANY</p>
          <h2>会社概要</h2>
        </div>
        <div className="company-grid">
          <dl>
            <div>
              <dt>会社名</dt>
              <dd>株式会社HPH</dd>
            </div>
            <div>
              <dt>事業内容</dt>
              <dd>訪問鍼灸マッサージ事業／デイサービス事業</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>
                〒655-0012
                <br />
                兵庫県神戸市垂水区向陽2丁目6-18
                <br />
                向陽センタービル103
              </dd>
            </div>
            <div>
              <dt>電話・FAX</dt>
              <dd>
                TEL：<a href="tel:0787548576">078-754-8576</a>
                <br />
                FAX：078-754-8580
              </dd>
            </div>
          </dl>
          <div className="map-card">
            <div className="map-lines" aria-hidden="true">
              <i /><i /><i /><i />
            </div>
            <div className="map-pin">
              <span>HPH</span>
            </div>
            <div className="map-label">
              <strong>神戸市垂水区</strong>
              <span>向陽センタービル103</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=%E5%85%B5%E5%BA%AB%E7%9C%8C%E7%A5%9E%E6%88%B8%E5%B8%82%E5%9E%82%E6%B0%B4%E5%8C%BA%E5%90%91%E9%99%BD2%E4%B8%81%E7%9B%AE6-18"
              target="_blank"
              rel="noreferrer"
            >
              Google マップで見る <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>ご相談・採用について、お気軽にお問い合わせください。</h2>
        <a href="tel:0787548576" className="contact-phone">
          <PhoneIcon /> <span>078-754-8576</span>
        </a>
        <p>受付時間は事業所までお問い合わせください</p>
      </section>

      <footer>
        <div className="footer-main">
          <img src="/hph-logo.jpg" alt="株式会社HPH" />
          <p>
            〒655-0012 兵庫県神戸市垂水区向陽2丁目6-18
            <br />
            向陽センタービル103
          </p>
          <nav aria-label="フッターナビゲーション">
            <a href="#philosophy">私たちについて</a>
            <a href="#services">事業紹介</a>
            <a href="#recruit">採用情報</a>
            <a href="#company">会社概要</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>感謝を込めて感動を届ける</span>
          <small>© 2026 HPH Inc.</small>
        </div>
      </footer>
    </main>
  );
}
