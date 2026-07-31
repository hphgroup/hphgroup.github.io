import SubPageShell from "../SubPageShell";

export default function BusinessPage() {
  return (
    <SubPageShell number="03" english="OUR BUSINESS" title="地域の暮らしを、支え続ける。" lead="医療・介護を通じて、住み慣れた地域での安心をつくります。">
      <section className="sub-intro">
        <p className="sub-kicker">CURRENT SERVICES</p><h2>現在展開している事業</h2>
        <div><p>一人ひとりの身体と生活に寄り添い、専門性とまごころを大切にしたサービスを提供しています。</p></div>
      </section>
      <section className="service-detail">
        <article><div><img src="/hph-acupuncture.jpg" alt="HPHによる訪問鍼灸施術" /></div><section><span>01</span><p>HOME-VISIT ACUPUNCTURE &amp; MASSAGE</p><h2>訪問鍼灸<br />マッサージ事業</h2><p>ご自宅や施設へ訪問し、身体の状態や生活環境に合わせた鍼灸・マッサージを提供。通院が難しい方の日常生活を支援します。</p></section></article>
        <article><div className="service-color">DAY<br />SERVICE</div><section><span>02</span><p>DAY SERVICE</p><h2>デイサービス事業</h2><p>安心して過ごせる居場所と、その方らしい生活につながる時間を提供。人との交流や活動を通じて、いきいきとした毎日を支えます。</p></section></article>
        <article><div><img src="/life-support.png" alt="車椅子を押しながら外出に付き添う生活サポートスタッフ" /></div><section><span>03</span><p>DAILY LIFE SUPPORT</p><h2>生活サポート事業</h2><p>通院同行、お部屋の片付け、話し相手など、介護・医療保険の対象外となる日常のお困りごとを幅広くサポート。兵庫県神戸市全域で、ご希望や生活状況に合わせたサービスを提供します。</p></section></article>
      </section>
      <section className="future">
        <p className="sub-kicker">FUTURE FIELD</p><h2>地域医療介護企業として、<br />未来のニーズへ。</h2><p>現在の3事業を基盤に、訪問看護・居宅介護支援なども見据え、地域の暮らしを切れ目なく支える企業を目指します。</p>
        <div><span>訪問看護</span><span>居宅介護支援</span><span>医療介護連携</span><span>その他地域サービス</span></div>
      </section>
    </SubPageShell>
  );
}
