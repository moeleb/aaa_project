import * as React from "react";
import { artistGallery } from "../../imagesPaths";

const Services = () => {
  return (
    <>
      {/* First Set of Content */}
      <div className="bg-main">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex flex-col my-auto pl-7 pr-16 py-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <header className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl max-md:leading-10">
                What is Extended Auto Warranty?
              </header>
              <div className="text-black text-base font-medium leading-6 mt-2.5 max-md:max-w-full">
                It is good that your car comes under the warranty coverage, but what happens when the original manufacturer warranty expires?
                <br />
                <br />
                Here the importance of extended auto warranty comes. An extended warranty extends the coverage even after the completion of the manufacturer warranty. This is the best way to provide extended protection, which helps customers save a lot of money.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet={artistGallery}
              className="aspect-[1.34] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-2.5"
            />
          </div>
        </div>
      </div>

      {/* Second Set of Content */}
      <div className="justify-center items-stretch self-stretch bg-gray-100 flex flex-col py-12">
        <header className="w-full mt-20 mb-12 max-md:max-w-full max-md:my-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <section className="justify-center items-stretch self-stretch flex grow flex-col px-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <h1 className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Extended Auto Warranty
                </h1>
                <div className="text-black text-xl font-medium leading-8 mt-2.5 max-md:max-w-full">
                  AAA warranty Services is an expert in providing extended warranty to new and used cars. Our auto extended warranty typically covers anything that goes wrong with your car and it typically covers the damage and repairs that are based on the amount of time and miles covered. We are the experts in the industry that provides you a high level of coverage at a reasonable price. Our extended warranties can provide you the real value that allows customers to keep away from anxiety and monetary loss.
                </div>
              </section>
            </div>
            <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch self-stretch shadow-xl bg-white flex flex-col w-full my-auto p-5 max-md:max-w-full max-md:mt-10">
                <h2 className="text-blue-950 text-4xl font-bold leading-9 uppercase max-md:max-w-full">
                  OUR EXTENDED AUTO WARRANTY FOR YOU AND YOUR VEHICLE
                </h2>
                <div className="text-black text-base font-medium leading-6 mt-1.5 max-md:max-w-full">
                  It's not too late to get your best warranty plan. Rest assured carrying the best coverage plan from us.
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Services;
