"use client";

import { FormEvent, useState } from "react";
import SubPageShell from "../SubPageShell";

type FormData = {
  category: string;
  name: string;
  organization: string;
  phone: string;
  email: string;
  message: string;
};

const initialForm: FormData = {
  category: "採用について",
  name: "",
  organization: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [confirming, setConfirming] = useState(false);

  const update = (key: keyof FormData, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setConfirming(false);
  };

  const confirm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConfirming(true);
  };

  return (
    <SubPageShell
      number="05"
      english="CONTACT"
      title="お問い合わせ"
      lead="サービスのご相談、採用についてのご質問など、お気軽にお問い合わせください。"
    >
      <section className="contact-page">
        <div className="contact-page-intro">
          <p className="sub-kicker">CONTACT FORM</p>
          <h2>人と人とのつながりを、<br />ここから。</h2>
          <p>必要事項をご入力ください。内容を確認したうえで、担当者よりご連絡いたします。</p>
          <a href="tel:0787548576">お電話でのお問い合わせ<br /><strong>078-754-8576</strong></a>
        </div>

        <form className="contact-form" onSubmit={confirm}>
          <label>
            <span>お問い合わせ種別</span>
            <select value={form.category} onChange={(event) => update("category", event.target.value)}>
              <option>採用について</option>
              <option>サービスのご相談</option>
              <option>医療・介護関係者からのご連絡</option>
              <option>その他</option>
            </select>
          </label>
          <label>
            <span>お名前 <b>必須</b></span>
            <input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="例：山田 太郎" />
          </label>
          <label>
            <span>会社・施設名</span>
            <input value={form.organization} onChange={(event) => update("organization", event.target.value)} placeholder="例：〇〇事業所" />
          </label>
          <label>
            <span>電話番号 <b>必須</b></span>
            <input required type="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="例：078-000-0000" />
          </label>
          <label>
            <span>メールアドレス <b>必須</b></span>
            <input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="例：sample@example.com" />
          </label>
          <label>
            <span>お問い合わせ内容 <b>必須</b></span>
            <textarea required rows={7} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="ご相談・ご質問をご入力ください。" />
          </label>
          <label className="privacy-check">
            <input required type="checkbox" />
            <span>入力した個人情報をお問い合わせへの回答に利用することに同意します。</span>
          </label>
          <button type="submit">入力内容を確認する <span>↗</span></button>
        </form>

        {confirming && (
          <section className="contact-confirm" aria-live="polite">
            <p>CONFIRMATION</p>
            <h2>入力内容をご確認ください。</h2>
            <dl>
              <div><dt>お問い合わせ種別</dt><dd>{form.category}</dd></div>
              <div><dt>お名前</dt><dd>{form.name}</dd></div>
              <div><dt>会社・施設名</dt><dd>{form.organization || "—"}</dd></div>
              <div><dt>電話番号</dt><dd>{form.phone}</dd></div>
              <div><dt>メールアドレス</dt><dd>{form.email}</dd></div>
              <div><dt>お問い合わせ内容</dt><dd>{form.message}</dd></div>
            </dl>
            <p className="contact-setup-note">送信先メールアドレスの設定後、この位置に「送信する」ボタンが表示されます。</p>
            <button type="button" onClick={() => setConfirming(false)}>入力内容を修正する</button>
          </section>
        )}
      </section>
    </SubPageShell>
  );
}
