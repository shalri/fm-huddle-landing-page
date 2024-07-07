import { featuresCopy } from "@/lib/data"

export default function Features() {
  return (
  <section className="">
      {featuresCopy.map((feature) => (
      <div className="">
        <div className="">
          <h2 className="">{feature.heading}</h2>
          <p className="">{feature.copy}</p>
        </div>
      </div>
      ))}
  </section>
  )
}
