import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="self-stretch bg-blue-900 px-10 py-12 max-md:px-5">
      <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <nav className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <a href="#" className="justify-center items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-5" aria-label="Home">
            <div className="text-white text-base leading-4 uppercase max-md:max-w-full">Home</div>
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full" aria-label="Services">
            <div className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full">services</div>
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full" aria-label="Car Insurance">
            <div className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full">car insurance</div>
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full" aria-label="Electronics Insurance">
            <div className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full">electronics insurance</div>
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full" aria-label="Road Side Service">
            <div className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full">road side service</div>
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full" aria-label="About Us">
            <div className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full">about us</div>
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full" aria-label="Contact Us">
            <div className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full">contact us</div>
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full" aria-label="Careers">
            <div className="text-white text-base leading-4 uppercase mt-5 max-md:max-w-full">careers</div>
          </a>
        </nav>
        <div className="flex flex-col items-stretch w-6/12 ml- max-md:w-full max-md:ml-5">
          <div className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-5">
            <div>
              UAE :+9715 800 22297 / 4420 2345
            </div>
            <div>
              KUWAIT : +965 1808040 / 22278650
            </div>
            <div>
              KSA : +966 14723915 / 14783661
            </div>
            <div>
              QATAR : +974 44278946 / 44358592
            </div>
            <div>
              BAHRAIN : +973 17212448 / 17223351
            </div>
            <div>
              EGYPT : +202 22632062 / 22636367
            </div>
            <div>
              OMAN : +968 2470 8176 / 276 / 476
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Footer;
