import Image from "next/image";
import { footerCopy } from "@/lib/data";
import { socialLinks } from "@/lib/data";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import React from "react";
import { IconType } from "react-icons";
import Newsletter from "./Newsletter";

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
        <Newsletter newsletterCopy={newsletterCopy} />
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
                        className: "h-[25px] w-[25px] sm:h-[35px] sm:w-[35px] hover:fill-cyan-400 transition-all duaration-300",
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
