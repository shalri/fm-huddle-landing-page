import Image from "next/image";
import { footerCopy } from "@/lib/data";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  const {phone, email, newsletterCopy, contactCopy } = footerCopy
  return (
    <footer className="">
      <div className="">
        <div className="">
          <h3 className="">Newsletter</h3>
          <p className="">{newsletterCopy}</p>
          <form action="submit"><input type="text" /><button>Subscribe</button></form>
        </div>
        <div className=""><Image src="./images/logo-footer.svg" alt="logo" width={120} height={50} className="h-[50px] w-[120px] bg-hud-very-dark-cyan"/>
          <p className="">Phone: {phone}</p>
          <p className="">{email}</p>

          <div className="">
            <ul className="">
              {socialLinks.map((link)=> (
              <a href={link.url} className="">{link.page}</a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
