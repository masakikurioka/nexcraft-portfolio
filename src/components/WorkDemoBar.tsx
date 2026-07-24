import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WorkDemoBar() {
  return (
    <div className="fixed top-4 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 pl-2 pr-4 py-2 shadow-lg">
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xs px-3 py-1.5"
        >
          <ArrowLeft className="size-3.5" />
          ポートフォリオへ戻る
        </Link>
        <span className="text-[11px] tracking-wide text-white/50">
          DEMO — Nex Craft ポートフォリオ用サンプル
        </span>
      </div>
    </div>
  );
}
