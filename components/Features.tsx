import { featuresCopy } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <section className="">
      {featuresCopy.map((feature) => (
        <div className={cn("h-[300px] bg-no-repeat bg-center bg-contain",feature.bg)} key={feature.title}>
          <div className="">
            <h2 className="">{feature.heading}</h2>
            <p className="">{feature.copy}</p>
          </div>
        </div>
      ))}
      <div className="h-[300px] bg-[url(/images/illustration-flowing-conversation.svg)]">
        <div className="">
          <h2 className=""></h2>
          <p className=""></p>
        </div>
      </div>
      
    </section>
  );
}
