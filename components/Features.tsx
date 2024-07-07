import { featuresCopy } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <section className="">
      <div className="bg-hud-very-pale-blue pb-[52px] pt-[84px]">
        <div className="h-[210px] bg-[url('/images/illustration-grow-together.svg')] bg-contain bg-center bg-no-repeat" />
        <div className="px-7 text-center text-hud-very-dark-cyan">
          <h2 className="mt-[78px] font-poppins text-xl font-bold">
            Grow Together
          </h2>
          <p className="mt-4 text-[14px]">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </div>
      <div className="bg-white bg-[url(/images/bg-section-bottom-mobile-1.svg)] bg-contain  bg-top bg-no-repeat pb-16 pt-[190px]">
        <div className="h-[190px] bg-[url('/images/illustration-flowing-conversation.svg')] bg-contain bg-center bg-no-repeat" />
        <div className="px-7 pt-3 text-center text-hud-very-dark-cyan">
          <h2 className="mt-[78px] font-poppins text-xl font-bold">
            Flowing Conversations
          </h2>
          <p className="mt-4 text-[14px]">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
      <div className="mt-[56px] bg-[url(/images/bg-section-top-mobile-2.svg)] bg-contain bg-top bg-no-repeat pt-[103px]">
        <div className="bg-hud-very-pale-blue pb-28 pt-4">
          <div className="h-[200px] bg-hud-very-pale-blue bg-[url('/images/illustration-your-users.svg')] bg-contain bg-center bg-no-repeat" />
          <div className="px-7 pt-[6px] text-center text-hud-very-dark-cyan">
            <h2 className="mt-[78px] font-poppins text-xl font-bold">
              Your Users
            </h2>
            <p className="mt-[14px] text-[14px]">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
