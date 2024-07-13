import { cn } from "@/lib/utils";

interface ButtonProps {
  addStyle?: string;
  text?: string;
}

export default function Button({
  addStyle = "",
  text = "Get Started For Free",
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full bg-hud-pink px-10 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-pink-400/90 hover:shadow-xl hover:shadow-black/10 sm:px-[102px] sm:py-8 sm:text-[20px]",
        addStyle,
      )}
    >
      {text}
    </button>
  );
}
