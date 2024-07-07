import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <nav className="flex items-center justify-between px-6 py-6">
        <div className="">
          <a href="/" className="">
            <Image src="./images/logo.svg" alt="logo" width={98} height={24} className="object-contain" />
          </a>
        </div>
        <button className="rounded-full border border-hud-pink px-[14px] py-1 text-[10px] font-bold text-hud-pink">
          Try It Free
        </button>
      </nav>
    </header>
  );
}
