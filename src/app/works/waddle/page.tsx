"use client";

import { motion } from "framer-motion";
import { Star, Trophy, Shirt, Map, Download } from "lucide-react";
import WorkDemoBar from "@/components/WorkDemoBar";

const FEATURES = [
  {
    icon: Map,
    title: "100以上のステージ",
    body: "森・砂漠・雪山...個性豊かなステージを歩いて冒険しよう。",
  },
  {
    icon: Shirt,
    title: "きせかえコレクション",
    body: "帽子や服をたくさん集めて、自分だけのウォドルを作ろう。",
  },
  {
    icon: Trophy,
    title: "デイリーランキング",
    body: "毎日更新されるランキングで、世界中のプレイヤーと競争。",
  },
];

const REVIEWS = [
  { name: "みかん", stars: 5, body: "操作が簡単なのに奥深い！移動中の暇つぶしに最高です。" },
  { name: "そら", stars: 5, body: "キャラクターがとにかく可愛い。きせかえ集めが止まりません。" },
  { name: "ゆうと", stars: 4, body: "ステージの数が多くて長く遊べる。デイリーが楽しみです。" },
];

function Sprite({ size = 96 }: { size?: number }) {
  const height = Math.round(size * (1024 / 307.2));
  return (
    <div
      style={{
        width: size,
        height,
        backgroundImage: "url(/works/waddle-character.jpg)",
        backgroundSize: "500% 100%",
        imageRendering: "auto",
      }}
      className="waddle-sprite"
    />
  );
}

export default function WaddlePage() {
  return (
    <div className="min-h-screen bg-[#eaf6ff] text-[#1c2b3a] font-sans overflow-x-hidden">
      <WorkDemoBar />

      <style>{`
        @keyframes waddle-walk {
          from { background-position: 0% 0%; }
          to { background-position: 100% 0%; }
        }
        .waddle-sprite {
          animation: waddle-walk 0.8s steps(4) infinite;
        }
        @keyframes waddle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .waddle-float { animation: waddle-float 3s ease-in-out infinite; }
      `}</style>

      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[8%] left-[8%] size-16 rounded-full bg-white/70" />
        <div className="absolute top-[14%] left-[16%] size-10 rounded-full bg-white/70" />
        <div className="absolute top-[6%] right-[12%] size-20 rounded-full bg-white/60" />
        <div className="absolute top-[60%] right-[6%] size-24 rounded-full bg-white/50" />
      </div>

      <nav className="px-6 h-20 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-display font-bold text-2xl tracking-tight text-[#2b6ea3]">
          WADDLE
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[#1c2b3a]/70">
          <span>特徴</span>
          <span>スクリーンショット</span>
          <span>レビュー</span>
        </div>
        <button className="rounded-full bg-[#ff9f43] text-white text-sm px-5 py-2.5 font-bold shadow-[0_4px_0_#e6842a]">
          ダウンロード
        </button>
      </nav>

      <section className="px-6 pt-8 pb-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(2.4rem,6vw,4rem)] font-bold leading-[1.05] text-[#1c2b3a]"
            >
              てくてく歩いて、
              <br />
              <span className="text-[#2b6ea3]">世界を冒険しよう。</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-[#1c2b3a]/60 max-w-md"
            >
              かわいいキャラクター「ウォドル」を操作して、100以上のステージを歩き回る癒し系アドベンチャーゲーム。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button className="rounded-2xl bg-[#1c2b3a] text-white px-5 py-3 text-sm font-medium flex items-center gap-2">
                <Download className="size-4" /> App Store
              </button>
              <button className="rounded-2xl bg-[#1c2b3a] text-white px-5 py-3 text-sm font-medium flex items-center gap-2">
                <Download className="size-4" /> Google Play
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="waddle-float rounded-[2.5rem] bg-white shadow-xl p-10 flex flex-col items-center gap-4">
              <Sprite size={140} />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="size-2 rounded-full bg-[#2b6ea3]/20" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white/60">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-center mb-14"
          >
            ゲームの特徴
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-7 text-center shadow-sm"
              >
                <div className="size-12 rounded-2xl bg-[#eaf6ff] flex items-center justify-center mx-auto mb-4">
                  <f.icon className="size-6 text-[#2b6ea3]" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-[#1c2b3a]/60 leading-relaxed">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-center mb-14"
          >
            プレイヤーの声
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`size-4 ${si < r.stars ? "fill-[#ff9f43] text-[#ff9f43]" : "text-[#1c2b3a]/15"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-[#1c2b3a]/70 leading-relaxed mb-4">
                  {r.body}
                </p>
                <p className="text-sm font-medium">{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-[2.5rem] bg-[#2b6ea3] text-white text-center p-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            今すぐウォドルと歩き出そう
          </h2>
          <p className="text-white/70 mb-8">無料でダウンロードできます</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="rounded-2xl bg-white text-[#2b6ea3] px-5 py-3 text-sm font-bold flex items-center gap-2">
              <Download className="size-4" /> App Store
            </button>
            <button className="rounded-2xl bg-white text-[#2b6ea3] px-5 py-3 text-sm font-bold flex items-center gap-2">
              <Download className="size-4" /> Google Play
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-[#1c2b3a]/40">
        &copy; {new Date().getFullYear()} Waddle Games(架空のゲームです)
      </footer>
    </div>
  );
}
