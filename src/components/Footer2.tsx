import React from "react";

import { maps, linkedin , fb , x , insta , tiktok, phoneFooter , mail, clock, location} from "../../imagesPaths";

const Footer2 = () => {

  const gradientStyle = {
    background: 'linear-gradient(to right, #19F0DF, #273F95)',
  };
  return (
    <span className="items-stretch flex flex-col px-10 py-11 max-md:px-5" style ={gradientStyle}>
      <div className="justify-center mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
            <div className="self-stretch grow max-md:max-w-full max-md:mt-6">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <span className="items-stretch self-stretch flex grow flex-col pb-12 max-md:mt-6">
                    <div className="text-white text-base font-bold leading-6 uppercase whitespace-nowrap">
                      Our SERVICES
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      Home
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      About us
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      Contact us
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      Services
                    </div>
                  </span>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <span className="items-stretch self-stretch flex grow flex-col pb-12 max-md:mt-6">
                    <div className="text-white text-base font-bold leading-6 uppercase whitespace-nowrap">
                      QUICK LINKS
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      Home
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      About us
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      Contact us
                    </div>
                    <div className="text-cyan-400 text-base font-light leading-6 uppercase whitespace-nowrap mt-5">
                      Services
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
              <img
                loading="lazy"
                srcSet={maps}
                className="aspect-[2.65] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <span className="items-center flex justify-between gap-2.5 pl-5 pr-1.5 py-2">
                  <img
                    loading="lazy"
                    src= {location}
                    className="aspect-[0.92] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-cyan-400 text-sm font-light">
                    1 Glenlake Pkwy Suite 650, Atlanta GA 30328
                  </div>
                </span>
                <span className="items-center flex justify-between gap-2.5 px-5 py-2">
                  <img
                    loading="lazy"
                    src= {clock}
                    className="aspect-square object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-cyan-400 text-sm font-light">
                    Monday to Friday: 9:00 AM - 5:00 PM
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex flex-col mt-6 px-16 max-md:max-w-full max-md:px-5">
        <div className="flex items-stretch gap-0 max-md:max-w-full max-md:flex-wrap">
          <span className="items-center flex justify-between gap-2.5 px-5 py-4">
            <img
              loading="lazy"
              src= {mail}
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-cyan-400 text-sm font-light lowercase self-stretch grow whitespace-nowrap">
              emAIL@MAIL.COM
            </div>
          </span>
          <span className="justify-between items-center flex gap-2.5 px-5 py-4">
            <img
              loading="lazy"
              src= {phoneFooter}
              className="aspect-square object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-cyan-400 text-sm font-light self-stretch grow whitespace-nowrap">
              +1 345 557 4444
            </div>
          </span>
        </div>
      </div>
      <div className="items-stretch self-center flex w-[200px] max-w-full gap-5 mt-6">
        <img
          loading="lazy"
          src= {insta}
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src= {x}
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src= {fb}
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src= {tiktok}
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src= {linkedin}
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
      </div>
      <div className="text-white text-center text-xs font-light leading-4 lowercase self-center max-w-[370px] mt-6">
        Lorem ipsum dolor sit amet consectetur. Nam aenean sed risus hendrerit
        orci turpis. Nascetur et et pharetra mi ipsum tristique.
      </div>
      <span className="justify-center items-stretch self-center flex gap-5 mt-2.5">
        <div className="text-cyan-400 text-center text-xs font-medium leading-4 underline capitalize grow whitespace-nowrap">
          Privacy Policy
        </div>
        <div className="text-cyan-400 text-center text-xs font-medium leading-4 underline capitalize">
          Disclaimer
        </div>
        <div className="text-cyan-400 text-center text-xs font-medium leading-4 underline capitalize grow whitespace-nowrap">
          Terms Of Service
        </div>
      </span>
    </span>
  );
}

export default Footer2;