"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Wand2, Palette } from "lucide-react";
import WorkDemoBar from "@/components/WorkDemoBar";

const SERVICES = [
  {
    icon: Layers,
    title: "ブランディング",
    body: "ロゴ、タイポグラフィ、カラーシステムまで一貫した世界観を設計。",
  },
  {
    icon: Wand2,
    title: "UI / インタラクション",
    body: "ガラスのような質感と光の屈折を活かした、記憶に残るUI表現。",
  },
  {
    icon: Palette,
    title: "アートディレクション",
    body: "プロダクトの世界観に合わせたビジュアル全体のディレクション。",
  },
];

const WORKS = [
  { name: "AURA", tag: "Fintech App" },
  { name: "NOVA", tag: "Music Platform" },
  { name: "ECHO", tag: "AI Assistant" },
];

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function PrismPage() {
  return (
    <div className="min-h-screen bg-[#f4f3f0] text-[#1a1a1a] font-sans overflow-x-hidden">
      <WorkDemoBar />

      {/* ambient color blobs for the glass refraction to pick up */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] size-[420px] rounded-full bg-[#7c5cff]/30 blur-[100px]" />
        <div className="absolute top-[20%] right-[5%] size-[380px] rounded-full bg-[#22d3ee]/30 blur-[100px]" />
        <div className="absolute bottom-[5%] left-[30%] size-[350px] rounded-full bg-[#ff8a65]/25 blur-[100px]" />
      </div>

      <nav className="sticky top-0 z-40">
        <GlassCard className="mx-4 mt-4 md:mx-8 md:mt-6 rounded-2xl">
          <div className="px-6 h-16 flex items-center justify-between">
            <span className="font-display font-semibold text-lg tracking-tight">
              PRISM
            </span>
            <div className="hidden md:flex gap-8 text-sm text-black/60">
              <span>Services</span>
              <span>Work</span>
              <span>Studio</span>
            </div>
            <button className="rounded-full bg-[#1a1a1a] text-white text-sm px-5 py-2 font-medium">
              相談する
            </button>
          </div>
        </GlassCard>
      </nav>

      <section className="relative px-6 pt-20 pb-32">
        <div
          aria-hidden
          className="absolute inset-x-0 top-24 flex flex-col items-center leading-[0.85] select-none pointer-events-none"
        >
          {["PRISM", "PRISM", "PRISM"].map((w, i) => (
            <span
              key={i}
              className="font-display font-bold text-[clamp(4rem,14vw,11rem)] text-[#1a1a1a]/[0.06]"
            >
              {w}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-2xl mt-10">
          <GlassCard className="p-10 md:p-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs text-black/60 mb-6"
            >
              <Sparkles className="size-3.5 text-[#7c5cff]" />
              Liquid Glass Design Studio
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(1.9rem,5vw,3rem)] font-semibold tracking-tight leading-tight"
            >
              光を、
              <br />
              かたちにする。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-black/60"
            >
              背景を歪ませ、透かす。ガラスのような質感でプロダクトの世界観を設計するデザインスタジオです。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8"
            >
              <button className="rounded-full bg-[#1a1a1a] text-white px-7 py-3.5 text-sm font-medium inline-flex items-center gap-2">
                プロジェクトを見る <ArrowRight className="size-4" />
              </button>
            </motion.div>
          </GlassCard>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mb-12"
          >
            <p className="text-sm text-[#7c5cff] mb-3 font-medium">
              SERVICES
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              提供できること
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-7 h-full">
                  <s.icon className="size-6 text-[#7c5cff] mb-4" />
                  <h3 className="font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {s.body}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mb-12"
          >
            <p className="text-sm text-[#7c5cff] mb-3 font-medium">WORK</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Selected Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {WORKS.map((w, i) => (
              <motion.div
                key={w.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="aspect-[4/5] p-7 flex flex-col justify-end">
                  <p className="font-display text-2xl font-semibold">
                    {w.name}
                  </p>
                  <p className="text-sm text-black/50 mt-1">{w.tag}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <GlassCard className="p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              あなたのプロダクトも、
              <br />
              もっと美しく。
            </h2>
            <p className="text-black/60 mb-8">
              ブランディングからUI実装まで、光と質感にこだわった制作をご提案します。
            </p>
            <button className="rounded-full bg-[#1a1a1a] text-white px-8 py-3.5 text-sm font-medium inline-flex items-center gap-2 mx-auto">
              お問い合わせ <ArrowRight className="size-4" />
            </button>
          </GlassCard>
        </motion.div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-black/40">
        &copy; {new Date().getFullYear()} PRISM Studio(架空のスタジオです)
      </footer>
    </div>
  );
}
