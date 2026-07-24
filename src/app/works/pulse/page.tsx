"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Users, Video, Sparkles, ArrowRight } from "lucide-react";
import WorkDemoBar from "@/components/WorkDemoBar";

const STATS = [
  { value: 120000, suffix: "+", label: "アクティブユーザー" },
  { value: 87, suffix: "%", label: "3ヶ月継続率" },
  { value: 450, suffix: "+", label: "専属トレーナー" },
];

const FEATURES = [
  {
    icon: Sparkles,
    title: "パーソナルAIプラン",
    body: "体力レベル・目標に合わせて、AIが毎週のトレーニングメニューを自動調整。",
  },
  {
    icon: Video,
    title: "ライブレッスン",
    body: "毎日開催のライブレッスンにいつでも参加。自宅でジム同等の熱量を。",
  },
  {
    icon: Users,
    title: "コミュニティ",
    body: "同じ目標を持つ仲間と繋がり、記録をシェアしてモチベーションを維持。",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  return (
    <motion.span
      onViewportEnter={() => {
        const duration = 1200;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(Math.floor(progress * value));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }}
      viewport={{ once: true }}
    >
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

export default function PulsePage() {
  return (
    <div className="min-h-screen bg-[#0c0c0d] text-white font-sans">
      <WorkDemoBar />

      <nav className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-display font-semibold text-lg tracking-tight">
            PULSE
          </span>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <span>特徴</span>
            <span>料金</span>
            <span>導入事例</span>
          </div>
          <button className="rounded-full bg-gradient-to-r from-[#ff6a3d] to-[#ffb800] text-black text-sm px-5 py-2 font-semibold">
            アプリを見る
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pt-20 pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 10%, rgba(255,106,61,0.2), transparent), radial-gradient(ellipse 60% 50% at 90% 30%, rgba(255,184,0,0.12), transparent)",
          }}
        />
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 mb-8"
            >
              <Flame className="size-3.5 text-[#ff6a3d]" />
              新規登録で1ヶ月無料
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.4rem,6vw,4rem)] leading-tight font-bold tracking-tight"
            >
              自分史上、
              <br />
              <span className="bg-gradient-to-r from-[#ff6a3d] to-[#ffb800] bg-clip-text text-transparent">
                最高のカラダへ。
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-white/60 max-w-md"
            >
              AIパーソナルトレーニング × ライブレッスンで、続けられるフィットネス習慣を。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex gap-4"
            >
              <button className="rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                無料で始める <ArrowRight className="size-4" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-64"
          >
            <div className="rounded-[2.5rem] border-4 border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 aspect-[9/18] flex flex-col gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-[#ff6a3d] to-[#ffb800] p-4 text-black">
                <p className="text-xs font-medium opacity-70">
                  今日のトレーニング
                </p>
                <p className="text-lg font-bold mt-1">全身HIIT・20分</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 flex-1">
                <p className="text-xs text-white/50 mb-2">週間アクティビティ</p>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
                      className="flex-1 rounded-full bg-gradient-to-t from-[#ff6a3d] to-[#ffb800]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl grid grid-cols-3 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#ff6a3d] to-[#ffb800] bg-clip-text text-transparent">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-14"
          >
            <p className="text-sm text-[#ff6a3d] mb-3 font-medium">
              FEATURES
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              続けられる仕組みを、
              <br />
              全部詰め込んだ。
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 p-7"
              >
                <f.icon className="size-6 text-[#ff6a3d] mb-4" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center rounded-3xl bg-gradient-to-br from-[#ff6a3d]/15 to-[#ffb800]/10 border border-white/10 p-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            今日から、変わろう。
          </h2>
          <p className="text-white/60 mb-8">
            1ヶ月無料でPulseのすべての機能をお試しいただけます。
          </p>
          <button className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
            無料で始める <ArrowRight className="size-4" />
          </button>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} Pulse Inc.(架空のプロダクトです)
      </footer>
    </div>
  );
}
