import React from "react";
import { leftQuote, rightQuote } from "../../imagesPaths";
import { Layout } from '@/components/layout'
import { ReactElement } from 'react'

// const AboutUs = () => {
//   return (
//     <section className="justify-center items-stretch self-stretch bg-gray-100 flex flex-col py-12">

// <div className="flex-col self-stretch overflow-hidden relative flex min-h-[916px] items-start">
//       <header className="relative justify-center items-stretch flex w-[853px] max-w-full flex-col px-10 py-12 max-md:px-5">
//         <h1 className="text-blue-950 text-5xl font-bold leading-10 uppercase mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">WHO WE ARE</h1>
//         <p className="text-black text-base font-medium leading-6 mt-2.5 mb-10 max-md:max-w-full">
//           AAA Warranty Services. is an American Company incorporated in Michigan in 2015, internationally licensed to provide 'Extended Warranty' for vehicles, very similar to the manufacturer's original warranty. The idea soon hit the automobile market worldwide. Its success was so astounding that its application turned out to be a 'panacea' for a variety of goods such as Electronic Appliances. We also offer other Added Value services like Roadside Assistance and Replacement Vehicle. <br /> <br /> Today, AAA is the world's premier provider of Extended Warranty programs and related benefits. Spread over 7 countries across the globe, we have established an unparalleled legacy serving the needs and demands of more
//         </p>
//       </header>
//       <div className="relative self-stretch w-full max-md:max-w-full max-md:pr-5">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
//             <div className="justify-center items-stretch relative flex grow flex-col pl-7 py-7 max-md:max-w-full max-md:mt-10 max-md:pl-5">
//               <h2 className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl"> What we offer </h2>
//               <p className="text-black text-base font-medium leading-6 mt-2.5 max-md:max-w-full"> Quality is the uncompromising seal both for our products and for services. The after-sales service is timeless, easier and faster. We make it more convenient for you to reach our products and services with several claim offices and several more branch offices at your disposal, you can have your claims settled in a short time. The claims department in Kuwait is open 5 days a week Sunday through Thursday from 8.00 am to 5.00 pm and in other countries is open 6 days a week Saturday through Wednesday from 8.00 am till 5.00 pm, Thursday 9.00 am to 1.00 pm and closed on Fridays. The company also owns several other business units in different sectors like Real Estate, Food Industry, Export and more. </p>
//             </div>
//           </div>
//           <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
//             <div className="justify-center items-stretch self-stretch shadow-xl bg-white relative flex flex-col w-full my-auto p-5 max-md:max-w-full max-md:mt-10">
//               <h2 className="text-blue-950 text-4xl font-bold leading-9 uppercase max-md:max-w-full">AAA MIDDLE EAST OPERATIONS ARE REINSURED BY A LEADING REINSURER RATED "AA"</h2>
//               <p className="text-black text-base font-medium leading-6 mt-1.5 max-md:max-w-full"> Hannover Re's business group has a worldwide network of subsidiaries, branches, and representative and service offices in 18 countries. We respond flexibly and quickly to the needs of our clients providing all standard reinsurance products as well as specially tailored valuable solutions to provide the best service. </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

      
// <div className="justify-center self-stretch bg-main px-20 py-11 max-md:px-5">
//       <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//         <header className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
//           <div className="justify-center items-stretch flex flex-col my-auto p-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
//             <h1 className="text-blue-950 text-center text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl" aria-label="Mission"> Mission </h1>
//             <div className="text-black text-center text-base font-medium leading-6 mt-2.5 max-md:max-w-full" aria-label="Mission Description"> We have built up the AAA edifice on the unbreakable employee-customer relationship. Our mission pinpoints nothing else but to serve their needs and wants. </div>
//           </div>
//         </header>
//         <section className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
//           <div className="justify-center items-stretch flex grow flex-col p-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
//             <h1 className="text-blue-950 text-center text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl" aria-label="Vision"> Vision </h1>
//             <div className="text-black text-center text-base font-medium leading-6 mt-2.5 max-md:max-w-full" aria-label="Vision Description"> To provide responsive services in the field of Extended Warranty and Added Value Services for the Automotive & Consumer Electronics Markets, positioning the company as one of the leading players in the domain </div>
//           </div>
//         </section>
//       </div>
//     </div>
    

      // <div className="w-full mt-24 mb-16 max-md:max-w-full max-md:my-10 max-md:pr-5">
      //   <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      //     <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
      //       <div className="justify-center items-stretch self-stretch flex grow flex-col px-10 max-md:max-w-full max-md:px-5">
      //         <h1 className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl">
      //           OUR OBJECTIVES
      //         </h1>
      //         <p className="text-black text-xl font-medium leading-8 mt-2.5 max-md:max-w-full" aria-label="Objectives description">
      //           Years of relentless work has put us where we are today, on the frontline in the industry, amidst neck-to-neck tight competition. A neatly disciplined team of employees held together on an uncompromising goal ahead: offering the covetable unique quality service to our clients. From the idea of Extended Warranty, we have moved onto other services like Roadside Assistance and Replacement Vehicle. And we continue to discover ways to make life easier and more exciting.
      //         </p>
      //       </div>
      //     </div>
      //     <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
      //       <div className="items-stretch flex flex-col justify-center my-auto pr-6 py-12 max-md:max-w-full max-md:mt-10 max-md:pr-5">
      //         <div className="justify-center shadow-xl bg-white flex flex-col pl-3 items-start max-md:max-w-full">
      //           <div className="justify-center items-start shadow-xl bg-white z-[1] flex mt-0 mb-0 flex-col pl-2 pr-5 py-5 max-md:max-w-full max-md:mb-2.5">
      //             <img
      //               loading="lazy"
      //               src = {leftQuote}
      //               className="aspect-[1.42] object-contain object-center w-[34px] overflow-hidden max-w-full ml-3 self-start max-md:ml-2.5"
      //               alt="John's profile picture"
      //             />
      //             <p className="self-stretch text-blue-950 text-xl italic leading-8 w-full ml-3 mt-2.5 max-md:max-w-full" aria-label="John's statement">
      //               We exceed our client expectation by offering a superior level of assistance when needed. <br /> We exceed our client expectation by offering a superior level of assistance when needed.
      //             </p>

      //             <img
      //               loading="lazy"
      //               src = {rightQuote}
      //               className="aspect-[1.42] object-contain object-center w-[34px] overflow-hidden max-w-full ml-3 self-start max-md:ml-2.5"
      //               alt="John's profile picture"
      //             />
                  
      //             <div className="self-stretch text-xl font-bold leading-4 uppercase mt-7 max-md:max-w-full text-main">
      //               John D.
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>


//     </section>

    
//   );
// };

// export default AboutUs;

const AboutUs = () => {
  return (
    <>
       <section className="justify-center items-stretch self-stretch bg-gray-100 flex flex-col py-12">

    <div className="self-stretch py-10 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
          <header className="justify-center items-stretch flex grow flex-col p-7 max-md:max-w-full max-md:mt-10 max-md:px-5" aria-label="What we offer">
            <h1 className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl">What we offer</h1>
            <div className="text-black text-base font-medium leading-7 mt-2.5 max-md:max-w-full">AAA Warranty Services is popular for quality in products and services. We prioritize efficient, accessible after-sales support, with various claim and branch offices for prompt claim resolution. Our extensive presence, including tailored service hours across different regions, and our involvement in sectors like Real Estate, Food Industry, and Export, underscore our commitment to excellence and diversity in business. AAA Warranty Services has a strong operational presence across the Middle East and North Africa, including key countries like KSA, Kuwait, UAE, Oman, Qatar, Bahrain, and Egypt. Our network extends to numerous automotive dealers in the region, ensuring <br /> top-notch customer care. The hub of our operations for the Middle East and Africa is strategically located in Dubai, further solidifying our commitment to these markets. <br /> AAA Warranty Services in the Middle East is reinforced by Hannover Re, a leading reinsurer rated 'AA'. With a global network across 18 countries, Hannover Re meets diverse client needs with standard and custom reinsurance products, ensuring superior service.</div>
          </header>
        </div>
        <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
          <section className="justify-center items-stretch self-stretch shadow-xl bg-white flex flex-col w-full my-auto p-5 max-md:max-w-full max-md:mt-10" aria-label="AAA MIDDLE EAST OPERATIONS ARE REINSURED BY A LEADING REINSURER RATED &quot;AA&quot;">
            <h2 className="text-blue-950 text-4xl font-bold leading-9 uppercase">AAA MIDDLE EAST OPERATIONS ARE REINSURED BY A LEADING REINSURER RATED &quot;AA&quot;</h2>
            <div className="text-black text-base font-medium leading-6 mt-1.5">Hannover Re's business group has a worldwide network of subsidiaries, branches, and representative and service offices in 18 countries. We respond flexibly and quickly to the needs of our clients providing all standard reinsurance products as well as specially tailored valuable solutions to provide the best service.</div>
          </section>
        </div>
      </div>
    </div>

    <div className="justify-center self-stretch bg-main px-20 py-11 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <header className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch flex flex-col my-auto p-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <h1 className="text-blue-950 text-center text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl" aria-label="Mission"> Mission </h1>
            <div className="text-black text-center text-base font-medium leading-6 mt-2.5 max-md:max-w-full" aria-label="Mission Description"> We have built up the AAA edifice on the unbreakable employee-customer relationship. Our mission pinpoints nothing else but to serve their needs and wants. </div>
          </div>
        </header>
        <section className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch flex grow flex-col p-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <h1 className="text-blue-950 text-center text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl" aria-label="Vision"> Vision </h1>
            <div className="text-black text-center text-base font-medium leading-6 mt-2.5 max-md:max-w-full" aria-label="Vision Description"> To provide responsive services in the field of Extended Warranty and Added Value Services for the Automotive & Consumer Electronics Markets, positioning the company as one of the leading players in the domain </div>
          </div>
        </section>
      </div>
    </div>

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

                  <img
                    loading="lazy"
                    src = {rightQuote}
                    className="aspect-[1.42] object-contain object-center w-[34px] overflow-hidden max-w-full ml-3 self-start max-md:ml-2.5"
                    alt="John's profile picture"
                  />
                  
                  <div className="self-stretch text-xl font-bold leading-4 uppercase mt-7 max-md:max-w-full text-main">
                    John D.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default AboutUs ;


AboutUs.getLayout = function getLayout(page: ReactElement){
    return <Layout>{page}</Layout>
  }
  