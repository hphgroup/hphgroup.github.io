import SubPageShell from "../SubPageShell";

export default function AboutPage() {
  return (
    <SubPageShell number="01" english="ABOUT HPH" title="感謝を込めて、感動を届ける。" lead="HPHが大切にする理念と、目指す未来。">
      <section className="sub-intro">
        <p className="sub-kicker">PHILOSOPHY</p>
        <h2>仕事ができることは、<br />決して当たり前ではない。</h2>
        <div>
          <p>HPHは、多くの人との繋がりによって成り立っています。</p>
          <p>利用者様、ご家族、地域の皆様、スタッフ、関係者など、多くの方々の支えがあって現在があります。</p>
          <p>その感謝を忘れず、一つひとつの仕事に向き合う。そして、期待を超える価値を届け、感動を生み出す。それがHPHの使命です。</p>
        </div>
      </section>
      <section className="mv-grid">
        <article><span>MISSION</span><h2>感謝を込めて、<br />感動を届ける。</h2><p>関わるすべての人に価値を届け、「この会社に頼んで良かった」「この人に出会えて良かった」と思っていただける仕事をします。</p></article>
        <article><span>VISION</span><h2>感動を作り与える<br />プロ集団へ。</h2><p>どのスタッフが関わっても、安心していただけるサービスを提供できる組織へ。地域から信頼され続ける会社を目指します。</p></article>
      </section>
      <section className="value-detail">
        <p className="sub-kicker">OUR VALUE</p><h2>行動を支える、5つの価値観。</h2>
        <div>{["感謝","プロ意識","課題解決","社会への貢献","挑戦"].map((item,i)=><article key={item}><span>0{i+1}</span><h3>{item}</h3></article>)}</div>
      </section>
    </SubPageShell>
  );
}
