// import { useRouter } from "next/router";
// import Image from "next/image";
// import { servicesLogo } from "../../imagesPaths";
// import Link from "next/link";

// const tabs = [
//     {
//         id: 1,
//         name: "Home",
//         url: "/"

//     },
//     {
//         id: 2,
//         name: "AboutUs",
//         url: "/about-us"
//     },
//     {
//         id: 3,
//         name: "services",
//         url: "/services"
//     },
//     {
//         id:4,
//         name: "insured",
//         url: "/insured-now"
//     },
//     {
//         id: 5,
//         name: "login",
//         url: "/login"
//     }

// ]


// const Navbar = () => {
//     const {push, pathname} = useRouter()
//     return (
//         <nav className="bg-white h-[75px] w-full">
//             <div className="flex items-center justify-between pt-5">
//             <div className="pl-10">
//             <Image src={servicesLogo} alt= "Services Logo" width={94} height={35} />                
//             </div>
//             <div className=" flex items-center pr-10">
//                 <ul className="flex flex-row gap-x-11">
//                     {
//                         tabs.map((tab) => (
//                             <li key={tab.id}>
//                                 <Link href={tab.url}>
//                                     {tab.name}
//                                 </Link>

//                             </li>
//                ))
//                     }
//                 </ul>
//                 </div>
//                 </div>
//         </nav>
//     )
// }

// export default Navbar;


import React from 'react';
import { servicesLogo } from "../../imagesPaths";

const Navbar = () => {
  return (
    <form
      className="justify-between self-stretch bg-gray-100 flex gap-5 pl-12 pr-10 py-5 items-start max-md:flex-wrap max-md:px-5"
      role="navigation"
    >
      <img
        loading="lazy"
        src={servicesLogo}
        className="aspect-[2.69] object-contain object-center w-[94px] fill-blue-950 overflow-hidden shrink-0 max-w-full"
        alt=""
      />
      <div className="items-start self-stretch flex justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
        <a href="/">
          <header
            className="text-blue-950 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-900 bg-opacity-10 self-stretch aspect-[1.7837837837837838] justify-center p-2.5 hover:bg-green-500 transition duration-300 ease-in-out"
            role="banner"
          >
            Home
          </header>
        </a>
        <a
          href="/about-us"
          className="text-blue-950 text-sm font-medium uppercase self-center my-auto nav-link hover:text-green-500"
          role="link"
        >
          About us
        </a>
        <a
          href="/services"
          className="text-blue-950 text-sm font-medium uppercase self-center my-auto nav-link hover:text-green-500"
          role="link"
        >
          Services
        </a>
        <button
          className="text-white text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 self-stretch grow justify-center p-2.5 hover:bg-green-500 transition duration-300 ease-in-out"
          type="button"
          role="button"
        >
          Get Insured Now
        </button>
        <button
          className="text-blue-950 text-sm font-bold uppercase whitespace-nowrap items-stretch self-stretch aspect-[1.8108108108108107] justify-center p-2.5 border-[0.5px] border-solid border-blue-950 hover:bg-green-500 transition duration-300 ease-in-out"
          type="button"
          role="button"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Navbar;