import React from "react";
import { leftQuote, rightQuote } from "../../imagesPaths";

const AboutUs = () => {
  return (
    <section className="justify-center items-stretch self-stretch bg-gray-100 flex flex-col py-12">
      <div className="w-full mt-24 mb-16 max-md:max-w-full max-md:my-10 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch self-stretch flex grow flex-col px-10 max-md:max-w-full max-md:px-5">
              <h1 className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl">
                OUR OBJECTIVES
              </h1>
              <p className="text-black text-xl font-medium leading-8 mt-2.5 max-md:max-w-full" aria-label="Objectives description">
                Years of relentless work has put us where we are today, on the frontline in the industry, amidst neck-to-neck tight competition. A neatly disciplined team of employees held together on an uncompromising goal ahead: offering the covetable unique quality service to our clients. From the idea of Extended Warranty, we have moved onto other services like Roadside Assistance and Replacement Vehicle. And we continue to discover ways to make life easier and more exciting.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col justify-center my-auto pr-6 py-12 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <div className="justify-center shadow-xl bg-white flex flex-col pl-3 items-start max-md:max-w-full">
                <div className="justify-center items-start shadow-xl bg-white z-[1] flex mt-0 mb-0 flex-col pl-2 pr-5 py-5 max-md:max-w-full max-md:mb-2.5">
                  <img
                    loading="lazy"
                    src = {leftQuote}
                    className="aspect-[1.42] object-contain object-center w-[34px] overflow-hidden max-w-full ml-3 self-start max-md:ml-2.5"
                    alt="John's profile picture"
                  />
                  <p className="self-stretch text-blue-950 text-xl italic leading-8 w-full ml-3 mt-2.5 max-md:max-w-full" aria-label="John's statement">
                    We exceed our client expectation by offering a superior level of assistance when needed. <br /> We exceed our client expectation by offering a superior level of assistance when needed.
                  </p>
                  
                  <div className="self-stretch text-xl font-bold leading-4 uppercase mt-7 max-md:max-w-full text-quoteColor">
                    John D.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
