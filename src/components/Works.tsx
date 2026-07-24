"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    slug: "flowly",
    title: "Flowly",
    tagline: "AIワークフロー自動化SaaSの製品LP",
    tags: ["SaaS", "ダークUI", "料金表"],
    bg: "linear-gradient(135deg, #171725, #0d0d14)",
  },
  {
    slug: "pulse",
    title: "Pulse",
    tagline: "パーソナルトレーニングアプリの訴求LP",
    tags: ["フィットネス", "アプリ", "コンバージョン導線"],
    bg: "linear-gradient(135deg, #1a1310, #0f0d0c)",
  },
  {
    slug: "marche",
    title: "Marche",
    tagline: "スペシャルティコーヒーブランドのLP",
    tags: ["ブランディング", "ストーリーテリング", "エディトリアル"],
    bg: "linear-gradient(135deg, #14140f, #0d0d0b)",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-sm text-accent-2 font-medium mb-3 tracking-wide">
            WORKS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            制作実績(サンプル)
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            それぞれ異なる業種・トーンを想定したLPを実際に構築しています。カードをクリックすると実物のページに遷移します。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/works/${p.slug}`}
                className="group block rounded-2xl border border-border overflow-hidden hover:border-border-strong transition-colors"
              >
                <div
                  className="relative h-48 overflow-hidden"
                  style={{ background: p.bg }}
                >
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="size-2 rounded-full bg-white/20" />
                    <span className="size-2 rounded-full bg-white/20" />
                    <span className="size-2 rounded-full bg-white/20" />
                  </div>
                  <iframe
                    src={`/works/${p.slug}`}
                    title={p.title}
                    tabIndex={-1}
                    style={{
                      width: "1440px",
                      height: "900px",
                      transform: "scale(0.25)",
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                    className="absolute top-8 left-0 border-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                    <span className="rounded-full bg-white text-black text-xs font-medium px-3 py-1.5 flex items-center gap-1">
                      詳しく見る <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    {p.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full border border-border px-2.5 py-1 text-foreground-subtle"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-foreground-subtle mt-8">
          ※上記はポートフォリオ用に制作した架空クライアントのサンプル作品です。実案件の実績ではありません。
        </p>
      </div>
    </section>
  );
}
