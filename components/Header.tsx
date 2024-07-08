import Image from "next/image";

export default function Header() {
  return (
    <header className="px-6 ">
      <nav className="sm:max-w-[1316px] sm:mx-auto flex items-center justify-between py-6 sm:py-20">
        <div className="relative w-[98px] h-[24px] sm:h-[38px] sm:w-[240px] sm:ml-[14px]">
          <a href="/" className="">
            <Image src="./images/logo.svg" alt="Huddler logo" fill className="object-contain" />
          </a>
        </div>
        <button className="rounded-full border border-hud-pink px-[14px] py-1 text-[10px] font-bold text-hud-pink sm:text-[16px] sm:font-normal sm:px-[29px] sm:py-[0.415rem]">
          Try It Free
        </button>
      </nav>
    </header>
  );
}
