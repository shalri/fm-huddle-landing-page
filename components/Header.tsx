"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { buttonAnimation } from "@/lib/animations";

export default function Header() {
  return (
    <header className="px-6 ">
      <nav className="flex items-center justify-between py-6 sm:mx-auto sm:max-w-[1316px] sm:py-20">
        <div className="relative h-[24px] w-[98px] sm:ml-[14px] sm:h-[38px] sm:w-[240px]">
          <a href="/" className="">
            <Image
              src="./images/logo.svg"
              alt="Huddler logo"
              fill
              className="object-contain"
            />
          </a>
        </div>
        <motion.button
          variants={buttonAnimation}
          // initial="hidden"
          whileInView="scaleUp"
          className="rounded-full border border-hud-pink px-[14px] py-1 text-[10px] font-bold text-hud-pink sm:px-[29px] sm:py-[0.415rem] sm:text-[16px] sm:font-normal"
          whileHover={{
            boxShadow: "0 0 20px rgba(255, 105, 180, 1)",
            transition: {
              duration: 0.3,
            },
          }}
          viewport={{ once: true }}
        >
          Try It Free
        </motion.button>
      </nav>
    </header>
  );
}
