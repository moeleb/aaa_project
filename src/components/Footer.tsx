import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const links: { title: string; links: { name: string; href: string }[] }[] = [
    {
      title: "Account",
      links: [
        {
          name: "Login",
          href: "/login",
        },
        {
          name: "Sign Up",
          href: "/signup",
        },
        {
          name: "Account Types",
          href: "/",
        },
        {
          name: "Free Trail",
          href: "/",
        },
      ],
    },

    {
      title: "About us",
      links: [
        {
          name: "About Us",
          href: "/about-us",
        },
        {
          name: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-stretch self-stretch bg-gray-950 px-12 max-md:px-5 font-sans">
      <div className="mt-10 flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap font-sans">
        <Image
          loading="lazy"
          src="/static/images/logo/arrow-trade-logo.webp"
          alt="Image Description"
          width={186}
          height={74}
          className="aspect-[2.51] w-[186px] max-w-full shrink-0 overflow-hidden object-contain object-center font-sans"
        />
        <div className="flex place-content-center items-stretch gap-2.5 self-center max-md:max-w-full max-md:flex-wrap md:mx-0 font-sans">
          <Button>Live Account</Button>
          <Button variant={"outline"}>Demo Account</Button>
        </div>
      </div>
      <div className="mt-16 flex items-stretch gap-20 max-md:mt-10 max-md:max-w-full max-md:flex-wrap font-sans">
        {links.map((link) => (
          <div className="flex flex-col items-stretch gap-5 font-sans" key={link.title}>
            <h2 className="text-xl font-bold  leading-5 text-white font-sans">
              {link.title}
            </h2>
            <ul className="flex flex-col items-stretch gap-5 font-sans ">
              {link.links.map((link) => (
                <Link href={link.href} key={link.name}>
                  <li className="mt-5 whitespace-nowrap text-xl font-light  leading-5 text-white font-sans">
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 text-xs font-light  leading-4 text-white max-md:mt-10 max-md:max-w-full font-sans">
        Forex and CFD trading involve significant risk and may not be suitable
        for all investors. Consider your objectives, experience, and risk
        appetite. There&apos;s a possibility of losing your initial investment;
        invest responsibly. For guidance, consult an independent advisor. Not
        for residents in certain jurisdictions. Operated by Arrow Trade S.A.R.L
        Ltd, Lebanon - Company No. 1028098, Office: Hazmieh, Mar Roukoz
        Center/Street, 4th Floor, Beirut; Seychelles - Company No. 237249, 306
        Victoria House, Victoria, Mahe.
        <br />{" "}
        <Link href="/terms-and-conditions" target="_blank">
          Compliant with KYC/AML policies.{" "}
        </Link>
      </div>
      <div className="mb-10 mt-16 text-xs font-light  leading-4 text-white max-md:mt-10 max-md:max-w-full font-sans">
        Copyright 2023 © ARROW TRADE
      </div>
    </div>
  );
};

export default Footer;