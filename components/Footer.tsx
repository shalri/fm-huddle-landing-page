import Image from "next/image";
import { footerCopy } from "@/lib/data";
import { socialLinks } from "@/lib/data";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import React from "react";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
};

export default function Footer() {
  const { phone, email, newsletterCopy, contactCopy } = footerCopy;
  return (
    <footer className="bg-hud-very-dark-cyan">
      <div className="px-7 text-white sm:mx-auto sm:mt-[100px] sm:justify-between sm:max-w-[1236px] sm:flex sm:px-5">
        <div className="sm:order-last sm:max-w-[520px] sm:flex-grow">
          <h3 className="mt-[60px] sm:mt-0 text-xl font-bold uppercase sm:text-2xl">Newsletter</h3>
          <p className="mt-4 text-[0.91rem] leading-[1.62] sm:max-w-[350px]">{newsletterCopy}</p>
          <form
            action="submit"
            className="mt-[34px] flex flex-col items-end gap-y-4 sm:w-full sm:mt-[40px]"
          >
            <div className="flex w-full gap-x-9">
              <input type="text" className="w-full rounded-md p-3 flex-grow" />
              <button className="w-[50%] rounded-md bg-hud-pink p-3 font-bold">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-[100px] sm:max-w-[300px] sm:mt-0">
          <div className="relative h-[36px] w-[200px] sm:h-[38px] sm:w-[240px]">
            <Image
              src="./images/logo-footer.svg"
              alt="logo"
              fill
              // className="object-contain"
            />
          </div>
          <p className="mt-4 text-[0.91rem] leading-[1.60] sm:mt-6">{contactCopy}</p>
          <p className="mt-[42px] bg-[url(/images/icon-phone.svg)] bg-[left_center] bg-no-repeat pl-10 text-[0.91rem] sm:mt-[26px]">
            Phone: {phone}
          </p>
          <p className="mt-5 bg-[url(/images/icon-email.svg)] bg-[left_center] bg-no-repeat pl-10 text-[0.8575rem]">
            {email}
          </p>

          <div className="mt-12 pb-10 sm:mt-20 sm:pb-20">
            <ul className="gap-x-[15px] flex sm:gap-x-[20px]">
              {socialLinks.map((link) => (
                <li className="" key={link.page}>
                  <a href={link.url} className="">
                    {iconMap[link.icon] &&
                      React.createElement(iconMap[link.icon], {
                        className: "h-[25px] w-[25px] sm:h-[35px] sm:w-[35px]",
                      })}
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
