"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY が設定されていません。.env.local を確認してください。"
      );
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent-2 font-medium mb-3 tracking-wide">
            CONTACT
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            お問い合わせ
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            サイト制作のご相談・お見積もりなど、お気軽にご連絡ください。
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border p-8 flex flex-col gap-5"
        >
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <input
            type="hidden"
            name="subject"
            value="【Nex Craft】ポートフォリオサイトからのお問い合わせ"
          />

          <div>
            <label
              htmlFor="name"
              className="block text-sm text-foreground-muted mb-2"
            >
              お名前
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="山田 太郎"
              className="w-full rounded-lg border border-border bg-background-card px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-2 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-foreground-muted mb-2"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-background-card px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-2 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-foreground-muted mb-2"
            >
              ご相談内容
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="制作したいサイトの概要、ご予算、ご希望の納期などをお書きください"
              className="w-full rounded-lg border border-border bg-background-card px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-2 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" /> 送信中...
              </>
            ) : (
              <>
                <Send className="size-4" /> 送信する
              </>
            )}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-accent-2">
              <CheckCircle2 className="size-4" />
              送信しました。ご連絡ありがとうございます。
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="size-4" />
              送信に失敗しました。フォームの設定(アクセスキー)をご確認ください。
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
