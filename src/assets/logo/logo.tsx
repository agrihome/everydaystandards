import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className, pacifico.className)}>
      <span className="text-black text-[22px]">Everyday</span>
      <span className="text-black text-[22px]">Standards</span>
    </div>
  );
};

export default Logo;
