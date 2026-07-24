"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-bg px-6 pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-4 py-1.5 text-xs text-foreground-muted mb-8"
      >
        <Sparkles className="size-3.5 text-accent-2" />
        AI駆動開発 × モダンフロントエンド
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-center text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.05] font-semibold tracking-tight max-w-4xl"
      >
        記憶に残る、
        <br />
        <span className="gradient-text">動きのあるWeb</span>を届ける。
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-xl text-center text-foreground-muted text-base sm:text-lg"
      >
        LP・サービスサイトの企画から実装まで。
        <br className="hidden sm:block" />
        モダンフロントエンドとAIツールを掛け合わせ、少人数でもハイクオリティなサイトを高速に制作します。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#works"
          className="w-full sm:w-auto text-center rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          制作実績を見る
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto text-center rounded-full border border-border-strong px-7 py-3.5 text-sm font-medium text-foreground hover:bg-background-card transition-colors"
        >
          お問い合わせ
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.8 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 text-foreground-subtle"
      >
        <ArrowDown className="size-5" />
      </motion.div>
    </section>
  );
}
