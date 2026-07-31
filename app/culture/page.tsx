import SubPageShell from "../SubPageShell";

const cultures = [
  ["感謝の文化","支えてくださるすべての人への感謝を、言葉と行動で表します。"],
  ["助け合いの文化","職種や立場を越えて支え合い、チームでより良い支援をつくります。"],
  ["成長の文化","学びを止めず、昨日より少しでも良い自分と組織を目指します。"],
  ["挑戦の文化","現状維持に留まらず、地域に必要な価値を生み出す挑戦を続けます。"],
  ["プロとして向き合う文化","専門職としての誇りと責任を持ち、誠実に仕事へ向き合います。"],
  ["感動を生み出す文化","期待を超える一歩を考え、心に残る体験を届けます。"],
];

export default function CulturePage() {
  return (
    <SubPageShell number="02" english="OUR CULTURE" title="理念を、毎日の行動へ。" lead="HPHでは、理念を掲げるだけでなく、仕事の中で実践する文化を育てています。">
      <section className="sub-intro compact">
        <p className="sub-kicker">CULTURE</p><h2>一人ひとりの行動が、<br />HPHらしさをつくる。</h2>
        <div><p>良いサービスは、良い組織文化から生まれます。私たちは、人を想う姿勢とプロとしての責任を両立し、仲間とともに成長できる環境を大切にしています。</p></div>
      </section>
      <section className="culture-grid">
        {cultures.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}
      </section>
      <div className="culture-photo"><img src="/hph-therapist.jpg" alt="利用者様と向き合うHPHスタッフ" /><p>一人ひとりに、誠実に向き合う。</p></div>
    </SubPageShell>
  );
}
