export default function Features() {
  return (
    <section className="">
      <div className="bg-hud-very-pale-blue pb-[52px] pt-[84px]">
        <div className="sm:mx-auto sm:flex sm:max-w-[1236px] sm:items-center sm:justify-evenly">
          <div className="h-[210px] bg-[url('/fm-huddle-landing-page/images/illustration-grow-together.svg')] bg-contain bg-center bg-no-repeat sm:h-[425px] sm:w-[50%]" />
          <div className="order-first px-7 text-center text-hud-very-dark-cyan sm:w-[50%] sm:text-left">
            <h2 className="mt-[78px] font-poppins text-xl font-bold sm:mt-4 sm:text-[2.5rem]">
              Grow Together
            </h2>
            <p className="mt-4 text-[14px] sm:mt-9 sm:max-w-[500px] sm:text-[16px]">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white bg-[url(/fm-huddle-landing-page/images/bg-section-bottom-mobile-1.svg)] sm:bg-[url(/fm-huddle-landing-page/images/bg-section-bottom-desktop-1.svg)] bg-contain  bg-top bg-no-repeat pb-16 pt-[190px] sm:pt-[330px]">
        <div className="sm:mx-auto sm:flex sm:max-w-[1256px] sm:items-center sm:justify-evenly">
        <div className="h-[190px] bg-[url('/fm-huddle-landing-page/images/illustration-flowing-conversation.svg')] bg-contain bg-center bg-no-repeat sm:h-[375px] sm:w-[50%]" />
        <div className="order-last sm: px-7 sm:pl-20 text-center text-hud-very-dark-cyan sm:w-[50%] sm:text-left">
          <h2 className="mt-[78px] font-poppins text-xl font-bold sm:mt-4 sm:text-[2.5rem]">
            Flowing Conversations
          </h2>
          <p className="mt-4 text-[14px] sm:mt-9 sm:max-w-[550px] sm:text-[16px]">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
        </div>
      </div>
      <div className="mt-[56px] sm:bg-[url(/fm-huddle-landing-page/images/bg-section-top-desktop-2.svg)] bg-[url(/fm-huddle-landing-page/images/bg-section-top-mobile-2.svg)] bg-contain bg-top bg-no-repeat pt-[103px]">
        <div className="sm:bg-hud-very-pale-blue sm:pt-[85px]">
        <div className="sm:pb-10 sm:mx-auto sm:flex sm:max-w-[1256px] sm:items-center sm:justify-evenly">
          <div className="h-[200px] bg-hud-very-pale-blue bg-[url('/fm-huddle-landing-page/images/illustration-your-users.svg')] bg-contain bg-center bg-no-repeat sm:h-[400px] sm:w-[50%]" />
          <div className="order-first sm: px-7 sm:pl-7 text-center text-hud-very-dark-cyan sm:w-[50%] sm:text-left">
            <h2 className="mt-[78px] font-poppins text-xl font-bold sm:mt-4 sm:text-[2.5rem]">
              Your Users
            </h2>
            <p className="mt-4 text-[14px] sm:mt-9 sm:max-w-[525px] sm:text-[16px]">
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
