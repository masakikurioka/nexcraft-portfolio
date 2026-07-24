"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WorkDemoBar from "@/components/WorkDemoBar";

const MENU = [
  { name: "エチオピア イルガチェフェ", note: "華やかな柑橘とジャスミンの香り", price: "¥1,800" },
  { name: "グアテマラ ウェウェテナンゴ", note: "チョコレートのような甘さとコク", price: "¥1,900" },
  { name: "ケニア ニエリ", note: "ベリー系の酸味と厚みのある余韻", price: "¥2,000" },
  { name: "ブレンド Marché No.1", note: "毎日飲みたい、バランスの良い一杯", price: "¥1,600" },
];

const STORES = [
  { name: "青山本店", address: "東京都港区南青山 3-2-1", hours: "8:00 - 19:00" },
  { name: "蔵前ロースタリー", address: "東京都台東区蔵前 4-5-6", hours: "9:00 - 18:00" },
];

const serif = "font-[family-name:var(--font-zen-old-mincho)]";

export default function MarcheContent() {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#2b211b]">
      <WorkDemoBar />

      <nav className="border-b border-[#2b211b]/10">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <span className={`${serif} text-2xl tracking-wide`}>Marché</span>
          <div className="hidden md:flex gap-10 text-sm text-[#2b211b]/60">
            <span>Story</span>
            <span>Menu</span>
            <span>Stores</span>
          </div>
          <button className="rounded-full border border-[#2b211b]/30 px-5 py-2 text-sm hover:bg-[#2b211b] hover:text-[#f7f1e8] transition-colors">
            オンラインストア
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(181,83,44,0.12), transparent)",
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] text-[#b5532c] mb-6"
          >
            SPECIALTY COFFEE ROASTER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${serif} text-[clamp(2.2rem,6vw,4rem)] leading-relaxed`}
          >
            一杯に、
            <br />
            物語を。
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-[#2b211b]/70 leading-loose max-w-lg mx-auto"
          >
            世界各地の農園を巡り、厳選した豆を丁寧に焙煎する。
            Marchéは、生産者の想いまでお届けするコーヒーロースターです。
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-[#2b211b]/10">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] rounded-lg"
            style={{
              background:
                "linear-gradient(150deg, #cba579, #8a5a3a 60%, #4a2f20)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm tracking-[0.3em] text-[#b5532c] mb-4">
              OUR STORY
            </p>
            <h2 className={`${serif} text-3xl mb-6 leading-relaxed`}>
              農園から、
              <br />
              カップまで。
            </h2>
            <p className="text-[#2b211b]/70 leading-loose">
              生産者と直接顔の見える関係を築き、フェアな価格で買い付けた豆だけを使用。
              一つひとつの個性を活かすため、少量ずつ手作業で焙煎しています。
              「知れば知るほど好きになるコーヒー」を、日々の暮らしに。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-[#2b211b]/10 bg-[#2b211b]/[0.03]">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] text-[#b5532c] mb-4">
              MENU
            </p>
            <h2 className={`${serif} text-3xl`}>今週のシングルオリジン</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {MENU.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex justify-between items-baseline border-b border-[#2b211b]/15 pb-4"
              >
                <div>
                  <p className={`${serif} text-lg`}>{item.name}</p>
                  <p className="text-sm text-[#2b211b]/60 mt-1">
                    {item.note}
                  </p>
                </div>
                <p className="text-[#b5532c] shrink-0 ml-4">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-[#2b211b]/10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] text-[#b5532c] mb-4">
              STORES
            </p>
            <h2 className={`${serif} text-3xl`}>店舗案内</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {STORES.map((store, i) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-[#2b211b]/15 p-8"
              >
                <p className={`${serif} text-xl mb-3`}>{store.name}</p>
                <p className="text-sm text-[#2b211b]/60">{store.address}</p>
                <p className="text-sm text-[#2b211b]/60 mt-1">
                  営業時間: {store.hours}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-[#2b211b]/10 bg-[#2b211b] text-[#f7f1e8]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className={`${serif} text-2xl sm:text-3xl mb-4`}>
            新作の焙煎情報を、いち早く。
          </h2>
          <p className="text-[#f7f1e8]/60 mb-8">
            メールマガジンにご登録いただくと、限定豆の入荷情報をお届けします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none"
            />
            <button className="rounded-full bg-[#f7f1e8] text-[#2b211b] px-6 py-3 text-sm font-medium inline-flex items-center justify-center gap-2">
              登録 <ArrowRight className="size-4" />
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-[#2b211b]/40 bg-[#2b211b] text-[#f7f1e8]/40">
        &copy; {new Date().getFullYear()} Marché(架空のブランドです)
      </footer>
    </div>
  );
}
