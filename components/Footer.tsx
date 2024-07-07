import Image from "next/image";
import { footerCopy } from "@/lib/data";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  const { phone, email, newsletterCopy, contactCopy } = footerCopy;
  return (
    <footer className="bg-hud-very-dark-cyan">
      <div className="px-7 text-white">
        <div className="">
          <h3 className="mt-[60px] text-xl font-bold uppercase">Newsletter</h3>
          <p className="mt-4 text-[0.91rem] leading-[1.62]">{newsletterCopy}</p>
          <form
            action="submit"
            className="mt-[34px] flex flex-col items-end gap-y-4"
          >
            <input type="text" className="w-full rounded-md p-3" />
            <button className="w-[50%] rounded-md bg-hud-pink p-3 font-bold">
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-[103px]">
          <Image
            src="./images/logo-footer.svg"
            alt="logo"
            width={200}
            height={50}
            // className="h-[50px] w-[120px] bg-hud-very-dark-cyan"
          />
          <p className="mt-4 text-[0.91rem] leading-[1.60]">{contactCopy}</p>
          <p className="bg-[url(/images/icon-phone.svg)] mt-[42px] bg-no-repeat bg-[left_center] text-[0.91rem] pl-10">
            Phone: {phone}
          </p>
          <p className="bg-[url(/images/icon-email.svg)] mt-4 bg-no-repeat bg-[left_center] text-[0.91rem] pl-10">{email}</p>

          <div className="">
            <ul className="">
              {socialLinks.map((link) => (
                <li className="" key={link.page}>
                  <a href={link.url} className="">
                    {link.page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
