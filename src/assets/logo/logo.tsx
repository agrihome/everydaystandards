import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className, pacifico.className)}>
      <div className="bg-[#ffd41d] px-4 py-1 rounded-xl text-black text-[22px] flex gap-2">
        <span>Everyday</span>
        <span>Standards</span>
      </div>
    </div>
  );
};

export default Logo;
