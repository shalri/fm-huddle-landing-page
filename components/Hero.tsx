import { heroCopy } from "@/lib/data";
import Button from "./Button";

export default function Hero() {
  const { heading, body } = heroCopy;
  return (
    <section className="bg-[url(/images/bg-section-top-mobile-1.svg)] bg-no-repeat bg-contain bg-[bottom_center] pb-[130px]">
      <div className="mt-[88px] px-6 text-center">
        <h1 className="font-poppins text-2xl font-bold leading-[1.55] text-hud-very-dark-cyan">
          {heading}
        </h1>
        <p className="mt-6 px-4 text-sm text-hud-very-dark-cyan">{body}</p>
        <Button addStyle="mt-12" />
      </div>

      <div className="w-full px-6">
        <div className="my-[102px] h-[215px] w-full bg-[url(/images/screen-mockups.svg)] bg-contain bg-center bg-no-repeat" />
        <div className="text-center">
          <p className="inline-block bg-[url(/images/icon-communities.svg)] bg-[length:30px_26px] bg-[left_4px_top_20px] bg-no-repeat pt-10 font-open text-[62px] font-bold text-hud-very-dark-cyan">
            1.4k+
          </p>
          <h3 className="text-[15px] text-black/50">Communities Formed</h3>
        </div>
        <div className="mt-[74px] text-center">
          <p className="inline-block bg-[url(/images/icon-messages.svg)] bg-[length:26px_22px] bg-[left_4px_top_20px] bg-no-repeat pt-10 font-open text-[54px] font-bold text-hud-very-dark-cyan">
            2.7m+
          </p>
          <h3 className="text-[15px] text-black/50">Messages Sent</h3>
        </div>
      </div>
    </section>
  );
}
