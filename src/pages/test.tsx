import exp from "constants";
import * as React from "react";
import { backgroundImage } from "../../imagesPaths";

const Test = () => {

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

    return (
    <div className="flex-col self-stretch overflow-hidden relative flex min-h-[916px] items-start " style={backgroundStyle}>
      <header className="relative justify-center items-stretch flex w-[853px] max-w-full flex-col px-10 py-12 max-md:px-5">
        <h1 className="text-blue-950 text-5xl font-bold leading-10 uppercase mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10" aria-label="Main heading">
          WHO WE ARE
        </h1>
        <div className="text-black text-base font-medium leading-6 mt-2.5 mb-10 max-md:max-w-full" aria-label="Description">
          AAA Warranty Services. is an American Company incorporated in Michigan in 2015, internationally licensed to provide 'Extended Warranty' for vehicles, very similar to the manufacturer's original warranty. The idea soon hit the automobile market worldwide. Its success was so astounding that its application turned out to be a 'panacea' for a variety of goods such as Electronic Appliances. We also offer other Added Value services like Roadside Assistance and Replacement Vehicle.
          <br />
          <br />
          Today, AAA is the world's premier provider of Extended Warranty programs and related benefits. Spread over 7 countries across the globe, we have established an unparalleled legacy serving the needs and demands of more
        </div>
      </header>
      <div className="relative self-stretch w-full max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch relative flex grow flex-col pl-7 py-7 max-md:max-w-full max-md:mt-10 max-md:pl-5">
              <h2 className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl" aria-label="Offer heading">
                What we offer
              </h2>
              <div className="text-black text-base font-medium leading-6 mt-2.5 max-md:max-w-full" aria-label="Offer description">
                Quality is the uncompromising seal both for our products and for services. The after-sales service is timeless, easier and faster. We make it more convenient for you to reach our products and services with several claim offices and several more branch offices at your disposal, you can have your claims settled in a short time. The claims department in Kuwait is open 5 days a week Sunday through Thursday from 8.00 am to 5.00 pm and in other countries is open 6 days a week Saturday through Wednesday from 8.00 am till 5.00 pm, Thursday 9.00 am to 1.00 pm and closed on Fridays. The company also owns several other business units in different sectors like Real Estate, Food Industry, Export and more.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch self-stretch shadow-xl bg-white relative flex flex-col w-full my-auto p-5 max-md:max-w-full max-md:mt-10">
              <h2 className="text-blue-950 text-4xl font-bold leading-9 uppercase max-md:max-w-full" aria-label="Operations heading">
                AAA MIDDLE EAST OPERATIONS ARE REINSURED BY A LEADING REINSURER RATED "AA"
              </h2>
              <div className="text-black text-base font-medium leading-6 mt-1.5 max-md:max-w-full" aria-label="Operations description">
                Hannover Re's business group has a worldwide network of subsidiaries, branches, and representative and service offices in 18 countries. We respond flexibly and quickly to the needs of our clients providing all standard reinsurance products as well as specially tailored valuable solutions to provide the best service.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test