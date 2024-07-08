import { heroCopy } from "@/lib/data";
import Button from "./Button";

export default function Hero() {
  const { heading, body } = heroCopy;
  return (
    <section className=" bg-[url(/images/bg-section-top-mobile-1.svg)] bg-no-repeat bg-contain bg-[bottom_center] sm:pb-[285px] pb-[130px] sm:bg-[url(/images/bg-section-top-desktop-1.svg)]">
      <div className="sm:max-w-[1316px] sm:mx-auto sm:mt-[148px] mt-[88px] px-6 text-center">
        <h1 className="sm:text-[3rem] font-poppins text-2xl font-bold leading-[1.55] text-hud-very-dark-cyan">
          {heading}
        </h1>
        <p className="mt-6 sm:mt-5 px-4 text-sm text-hud-very-dark-cyan sm:text-[20px] sm:leading-normal max-w-[650px] mx-auto">{body}</p>
        <Button addStyle="mt-12" />
      </div>

      <div className="w-full px-6 sm:pt-2">
        <div className="my-[102px] h-[215px] w-full bg-[url(/images/screen-mockups.svg)] bg-contain bg-center bg-no-repeat sm:h-[740px] sm:min-w-screen" />
        <div className="sm:flex sm:justify-evenly gap-x-[130px] sm:item-center sm:flex-row">
          <div className="text-center">
            <p className="inline-block bg-[url(/images/icon-communities.svg)] sm:bg-[length:46px_40px] bg-[length:30px_26px] sm:bg-[left_5px_top_16px] bg-[left_4px_top_20px] bg-no-repeat pt-10 font-open text-[62px] font-bold text-hud-very-dark-cyan sm:pt-12 sm:text-[6rem]">
              1.4k+
            </p>
            <h3 className="text-[15px] text-black/50 sm:text-2xl mt-1">Communities Formed</h3>
          </div>
          <div className="mt-[74px] sm:mt-0 text-center">
            <p className="inline-block bg-[url(/images/icon-messages.svg)] sm:bg-[length:38px_33px] bg-[length:26px_22px] bg-[left_4px_top_20px] sm:bg-[left_10px_top_20px] bg-no-repeat sm:pt-12 pt-10 font-open text-[54px] font-bold text-hud-very-dark-cyan sm:text-[6rem]">
              2.7m+
            </p>
            <h3 className="text-[15px] text-black/50 sm:text-2xl mt-1">Messages Sent</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
