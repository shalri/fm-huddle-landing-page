import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="bg-[url(/images/bg-footer-top-mobile.svg)] bg-contain bg-bottom bg-no-repeat">
      <div className="bg-[url(/images/bg-section-bottom-mobile-2.svg)] bg-contain bg-top bg-no-repeat px-6 pb-[302px] pt-20 text-center sm:bg-[url(/images/bg-section-bottom-desktop-2.svg)] sm:pb-[360px]">
        <h2 className="mb-10 mt-[90px] font-poppins text-[1.475rem] font-bold text-hud-very-dark-cyan sm:mt-[225px] sm:text-[2.45rem]">
          Ready To Build Your Community?
        </h2>
        <Button />
      </div>
    </section>
  );
}
