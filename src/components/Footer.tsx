import React from "react";

const Footer = () => {
  return (
    <footer className="self-stretch bg-blue-900 px-10 py-12 max-md:px-5">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
        <nav className="justify-center items-stretch flex flex-col my-auto max-md:max-w-full">
          <a href="#" className="text-white text-base leading-4 uppercase max-md:max-w-full">
            Home
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-8 max-md:max-w-full">
            services
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-8 max-md:max-w-full">
            car insurance
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-8 max-md:max-w-full">
            electronics insurance
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-8 max-md:max-w-full">
            road side service
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-8 max-md:max-w-full">
            about us
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-8 max-md:max-w-full">
            contact us
          </a>
          <a href="#" className="text-white text-base leading-4 uppercase mt-8 max-md:max-w-full">
            careers
          </a>
        </nav>
      </div>
      <div className="flex flex-col items-stretch w-6/12 ml-5 mt-2 max-md:w-full max-md:ml-0">
        <p className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-10">
          UAE :+9715 800 22297 / 4420 2345
        </p>
        <p className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-10">
          KUWAIT : +965 1808040 / 22278650
        </p>
        <p className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-10">
          KSA : +966 14723915 / 14783661
        </p>
        <p className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-10">
          QATAR : +974 44278946 / 44358592
        </p>
        <p className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-10">
          BAHRAIN : +973 17212448 / 17223351
        </p>
        <p className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-10">
          EGYPT : +202 22632062 / 22636367
        </p>
        <p className="self-stretch text-white text-base leading-10 uppercase my-auto max-md:max-w-full max-md:mt-10">
          OMAN : +968 2470 8176 / 276 / 476
        </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;