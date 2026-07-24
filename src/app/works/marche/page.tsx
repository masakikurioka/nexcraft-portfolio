import { Zen_Old_Mincho } from "next/font/google";
import MarcheContent from "./MarcheContent";

const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-old-mincho",
});

export default function MarchePage() {
  return (
    <div className={zenOldMincho.variable}>
      <MarcheContent />
    </div>
  );
}
