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
        "rounded-full bg-hud-pink px-10 py-3 text-xs font-bold text-white",
        addStyle,
      )}
    >
      {text}
    </button>
  );
}
