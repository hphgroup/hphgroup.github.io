import SubPageShell from "../SubPageShell";

const people = ["感謝を忘れない人","自ら考え行動できる人","プロとして仕事に向き合える人","挑戦できる人","仲間と成長できる人"];

export default function RecruitPage() {
  return (
    <SubPageShell number="04" english="RECRUIT" title="共に、地域へ価値を。" lead="一人ひとりの成長が組織の力となり、地域への価値提供につながります。">
      <section className="recruit-message">
        <div><img src="/care-team.jpg" alt="利用者と接するケアスタッフ" /></div>
        <section><p className="sub-kicker">MESSAGE</p><h2>未来のHPHを、<br />一緒につくりたい。</h2><p>「誰かの役に立ちたい」「専門職として成長したい」「理念に共感できる仲間と働きたい」。そんな想いを持った方と一緒に、未来のHPHを作っていきたいと考えています。</p></section>
      </section>
      <section className="people">
        <p className="sub-kicker">WHO WE NEED</p><h2>HPHが求める人材</h2><p>HPHで活躍する人は、スキルだけではなく姿勢を大切にしています。</p>
        <div>{people.map((item,i)=><article key={item}><span>0{i+1}</span><h3>{item}</h3></article>)}</div>
      </section>
      <section className="recruit-contact"><p>現在の募集職種や勤務条件については、事業所までお問い合わせください。</p><a href="tel:0787548576">078-754-8576 <span>↗</span></a></section>
    </SubPageShell>
  );
}
