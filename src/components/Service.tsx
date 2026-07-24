"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "LP制作(企画〜実装)",
    price: "¥100,000〜",
    desc: "新規サービス・SaaS・イベントなどのランディングページを、構成案からアニメーション実装まで一貫して制作します。",
    items: [
      "ヒアリング・構成案作成",
      "モダンフロントエンドでの実装",
      "スクロールアニメーション",
      "レスポンシブ対応",
    ],
    highlight: true,
  },
  {
    name: "コーディング代行",
    price: "¥30,000〜 / ページ",
    desc: "Figma等のデザインカンプを、レスポンシブ・アニメーション込みでコーディングします。制作会社様からの外注にも対応。",
    items: [
      "デザインカンプの実装",
      "アニメーション・インタラクション付与",
      "各種ブラウザ・端末対応",
    ],
    highlight: false,
  },
  {
    name: "既存サイトの改修",
    price: "¥20,000〜",
    desc: "既存サイトへのアニメーション追加、レスポンシブ修正、表示速度の改善など、部分的な改修に対応します。",
    items: ["アニメーション追加", "表示崩れ・速度の改善", "軽微な機能追加"],
    highlight: false,
  },
];

export default function Service() {
  return (
    <section id="service" className="py-28 px-6 bg-background-elevated">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-sm text-accent-2 font-medium mb-3 tracking-wide">
            SERVICE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            対応できること
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            価格は目安です。内容・ボリュームに応じてお見積もりしますので、まずはお気軽にご相談ください。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "border border-accent/40 bg-gradient-to-b from-accent/10 to-transparent"
                  : "border border-border"
              }`}
            >
              <h3 className="font-medium text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="font-display text-2xl font-semibold gradient-text mb-4">
                {plan.price}
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                {plan.desc}
              </p>
              <ul className="flex flex-col gap-2.5 mt-auto">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Check className="size-4 text-accent-2 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
