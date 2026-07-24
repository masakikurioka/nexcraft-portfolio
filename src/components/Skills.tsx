"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "コア技術",
    items: ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "スタイリング・演出",
    items: ["Tailwind CSS", "Framer Motion", "レスポンシブデザイン"],
  },
  {
    label: "開発フロー",
    items: ["Claude Code (AI駆動開発)", "Git / GitHub", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-background-elevated">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-sm text-accent-2 font-medium mb-3 tracking-wide">
            SKILLS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            使用技術・ツール
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            モダンフロントエンドの技術をベースに、AIツールを組み合わせて開発しています。
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="text-sm font-medium text-foreground-subtle mb-5 tracking-wide">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-gradient-to-br from-accent to-accent-2 shrink-0" />
                    <span className="text-sm">{item}</span>
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
