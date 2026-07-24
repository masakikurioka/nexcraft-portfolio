"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Plug,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import WorkDemoBar from "@/components/WorkDemoBar";

const FEATURES = [
  {
    icon: Workflow,
    title: "ノーコード自動化",
    body: "ドラッグ&ドロップで業務フローを組み立て、繰り返し作業をワンクリックで自動化。",
  },
  {
    icon: Plug,
    title: "100以上のツール連携",
    body: "Slack・Notion・Googleスプレッドシートなど、普段使うツールとシームレスに接続。",
  },
  {
    icon: BarChart3,
    title: "リアルタイム分析",
    body: "自動化フローの実行状況をダッシュボードで可視化し、ボトルネックを即座に把握。",
  },
  {
    icon: ShieldCheck,
    title: "エンタープライズセキュリティ",
    body: "SSO・監査ログ・権限管理に対応し、大規模チームでも安心して導入可能。",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "¥0",
    period: "/ month",
    desc: "個人・小さなチームのお試しに",
    features: ["3ワークフローまで", "5ツール連携", "コミュニティサポート"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "¥4,900",
    period: "/ month",
    desc: "成長中のチームに最適",
    features: [
      "無制限ワークフロー",
      "全ツール連携",
      "優先サポート",
      "高度な分析",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "お問い合わせ",
    period: "",
    desc: "大規模組織・カスタム要件に",
    features: ["SSO / 監査ログ", "専任サポート", "SLA保証"],
    highlight: false,
  },
];

export default function FlowlyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5] font-sans">
      <WorkDemoBar />

      <nav className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-display font-semibold text-lg">
            Flow<span className="text-[#8b7cff]">ly</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <span>Features</span>
            <span>Pricing</span>
            <span>FAQ</span>
          </div>
          <button className="rounded-full bg-white text-black text-sm px-5 py-2 font-medium">
            無料で始める
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pt-24 pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,124,255,0.25), transparent)",
          }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 mb-8"
          >
            <span className="size-1.5 rounded-full bg-[#22d3ee]" />
            AI-powered workflow automation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-tight font-semibold tracking-tight"
          >
            ワークフローを、
            <br />
            <span className="bg-gradient-to-r from-[#8b7cff] to-[#22d3ee] bg-clip-text text-transparent">
              AIに任せる。
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/60 max-w-xl mx-auto"
          >
            繰り返し業務をAIが学習し自動化。チームは、本当に価値のある仕事に集中できます。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="rounded-full bg-white text-black px-7 py-3.5 text-sm font-medium inline-flex items-center justify-center gap-2">
              無料で始める <ArrowRight className="size-4" />
            </button>
            <button className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium">
              デモを見る
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-4xl mt-20 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
        >
          <div className="rounded-xl bg-[#101018] border border-white/5 p-6 grid grid-cols-3 gap-4">
            {["新規リード自動振り分け", "請求書の自動生成", "週次レポート送信"].map(
              (row, i) => (
                <div
                  key={row}
                  className="col-span-3 sm:col-span-1 rounded-lg bg-white/5 p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`size-2 rounded-full ${i === 1 ? "bg-yellow-400" : "bg-[#22d3ee]"}`}
                    />
                    <span className="text-xs text-white/50">
                      {i === 1 ? "実行中" : "完了"}
                    </span>
                  </div>
                  <p className="text-sm">{row}</p>
                </div>
              )
            )}
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-14"
          >
            <p className="text-sm text-[#22d3ee] mb-3">FEATURES</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              チームの生産性を、
              <br />
              一段引き上げる。
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 p-7"
              >
                <f.icon className="size-6 text-[#8b7cff] mb-4" />
                <h3 className="font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-14 mx-auto text-center"
          >
            <p className="text-sm text-[#22d3ee] mb-3">PRICING</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              シンプルな料金体系
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-7 flex flex-col ${
                  plan.highlight
                    ? "border border-[#8b7cff]/50 bg-gradient-to-b from-[#8b7cff]/10 to-transparent"
                    : "border border-white/10"
                }`}
              >
                <h3 className="font-medium mb-1">{plan.name}</h3>
                <p className="text-sm text-white/50 mb-4">{plan.desc}</p>
                <p className="font-display text-3xl font-semibold mb-6">
                  {plan.price}
                  <span className="text-sm text-white/40 font-normal">
                    {plan.period}
                  </span>
                </p>
                <ul className="flex flex-col gap-2.5 mt-auto mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <Check className="size-4 text-[#22d3ee]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`rounded-full px-5 py-2.5 text-sm font-medium ${
                    plan.highlight
                      ? "bg-white text-black"
                      : "border border-white/20"
                  }`}
                >
                  選択する
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} Flowly, Inc.(架空のプロダクトです)
      </footer>
    </div>
  );
}
