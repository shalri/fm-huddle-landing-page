import { heroCopy } from "@/lib/data"

export default function Hero() {
  const {heading, body} = heroCopy
  return (
    <section>
      <div className="">
        <h1 className="">{heading}</h1>
        <p className="">{body}</p>
      <button>Get Started For Free</button>
      </div>

      <div className="">
        <div className="">
          <p className="">1.4k+</p>
          <h3 className="">Communities Formed</h3>
        </div>
        <div className="">
          <p className="">2.7m+</p>
          <h3 className="">Messages Sent</h3>
        </div>
      </div>
    </section>
  )
}
