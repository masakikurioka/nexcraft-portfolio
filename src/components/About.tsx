"use client";

import { motion } from "framer-motion";
import { Bot, Gauge, MessageCircle } from "lucide-react";

const STRENGTHS = [
  {
    icon: Bot,
    title: "AIを活用した開発速度",
    body: "Claude Codeなどの AI 開発ツールを相棒に、設計からコーディングまでを高速に進行。少人数体制でも量産的な制作に負けないスピードを実現します。",
  },
  {
    icon: Gauge,
    title: "モダン技術への強いこだわり",
    body: "React / Next.js をベースに、アニメーションやレスポンシブ対応まで丁寧に作り込み。「動きのある、印象に残る」体験を追求します。",
  },
  {
    icon: MessageCircle,
    title: "小回りの利くやりとり",
    body: "個人で担当するからこそ、要望のヒアリングから細かな修正まで、スピーディーかつ柔軟にコミュニケーションできます。",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_1.1fr] gap-14 items-start"
        >
          <div>
            <p className="text-sm text-accent-2 font-medium mb-3 tracking-wide">
              ABOUT
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              AIと共に、
              <br />
              次のWeb制作を。
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="size-14 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-display font-semibold text-background">
                NC
              </div>
              <div>
                <p className="font-medium text-foreground">Nex Craft</p>
                <p className="text-sm text-foreground-subtle">
                  Frontend Developer
                </p>
              </div>
            </div>
            <p className="text-foreground-muted leading-relaxed">
              HTML・CSS・JavaScriptの基礎を学んだのち、Claude
              Codeをはじめとする AI 開発ツールを積極的に取り入れながら、モダンなフロントエンド開発に取り組んでいます。
            </p>
            <p className="text-foreground-muted leading-relaxed mt-4">
              一人で企画から実装までを担うからこそ、AIを「相棒」としてフル活用し、スピードと品質の両立を大切にしています。スタートアップや新規サービスの魅力がしっかり伝わるサイトを、これから数多く手がけていきたいと考えています。
            </p>
          </div>

          <div className="grid gap-5">
            {STRENGTHS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background-card p-6"
              >
                <s.icon className="size-6 text-accent-2 mb-4" />
                <h3 className="font-medium text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
