import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { ReactElement } from 'react'
import { aaaLogo } from "../../imagesPaths";
import { homebg } from "../../imagesPaths";
import { phone } from "../../imagesPaths";
import { aaasymbol } from "../../imagesPaths";

//  const Home = () => {
//   return (
//     <>

// <form className="flex-col items-stretch self-stretch overflow-hidden relative flex min-h-[885px]"  style={{ backgroundImage: `url(${homebg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//       <div className="relative w-full max-md:max-w-full">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
//             <div className="justify-center self-stretch relative flex grow flex-col px-10 py-12 items-start max-md:max-w-full max-md:px-5">
//               <header className="self-stretch text-blue-950 text-5xl font-bold leading-10 uppercase mt-14 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
//                 Anytime Anywhere <br /> we always reach you on time
//               </header>
//               <div className="self-stretch text-black text-base font-medium leading-6 mt-2.5 max-md:max-w-full">
//                 We exceed our client expectation by offering a superior level of assistance when needed. Get back on the road as soon as possible
//               </div>
//               <a href="#" className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 justify-center mt-2.5 mb-8 p-2.5">
//                 get insured now
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
//           </div>
//         </div>
//       </div>
      
//       <div className="relative w-full max-md:max-w-full max-md:pl-5">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0 pl-6">
//             <div className="justify-center self-stretch shadow-xl bg-white relative flex flex-col w-full my-auto p-5 items-start max-md:max-w-full max-md:mt-10">
//               <img loading="lazy" src={phone} />
//               <header className="self-stretch text-blue-950 text-4xl font-bold leading-9 uppercase mt-1.5 max-md:max-w-full">
//                 ELECTRONICS WARRANTY
//               </header>
//               <div className="self-stretch text-black text-xl font-medium leading-8 mt-1.5 max-md:max-w-full">
//                 We exceed our client expectation by offering a superior level of assistance when needed. Get back on the road as soon as possible
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0 pl-5">
//             <div className="justify-center relative flex grow flex-col pl-7 pr-16 py-7 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
//               <header className="text-blue-950 text-5xl font-bold leading-10 uppercase self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-10">
//                 Providing unparalleled warranty services
//               </header>
//               <div className="text-black text-base font-medium leading-6 self-stretch w-full mt-2.5 max-md:max-w-full max-md:mr-1.5">
//                 At AAA warranty services, we have always placed an outstanding focus to providing high values to clients through various warranty plans. Offering various protection plans ranging from auto warranty, electronics warranty to home warranty and other value-added services, through sustainable solutions to give you peace of mind.
//               </div>
//               <a href="#" className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 justify-center mt-2.5 p-2.5">
//                 get insured now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>

    // <form className="flex-col items-stretch self-stretch overflow-hidden relative flex pt-20 pb-20 bg-secondary">
    //   <div className="relative w-full max-md:max-w-full max-md:pl-5">
    //     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    //       <header className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
    //         <img
    //           loading="lazy"
    //           src= {aaaLogo}
    //           className="aspect-[2.67] object-contain object-center w-full fill-blue-950 overflow-hidden my-auto max-md:mt-10"
    //           alt=""
    //         />
    //       </header>
    //       <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
    //         <div className="justify-center items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
    //           <h1 className="text-black text-xl font-medium leading-8 max-md:max-w-full">AAA Warranty Services. is an American Company incorporated in Michigan in 2015, internationally licensed to provide 'Extended Warranty' for vehicles, very similar to the manufacturer's original warranty.</h1>{" "}
    //           <a
    //             href="#"
    //             className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 justify-center mt-10 p-2.5 self-start"
    //           >
    //             Activate Your Roadside Assistance Policy Now
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </form>
//     </>
//   );
// }


// export default Home;

 const Home = () => {
  return (
    <>
    <div className="bg-primary">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch flex flex-col my-auto pl-7 pr-16 py-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
            
            <header className="text-main text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Always within reach
            </header>
            <div className="text-black text-base font-medium leading-6 mt-2.5 max-md:max-w-full">
              AAA Warranty Services guarantees timely assistance. Our commitment is to exceed expectations with exceptional support, ensuring you're back on track swiftly.
            </div>
            <div className="mt-2.5 mb-8">
              <a href="#" className="text-primary-sm font-bold uppercase inline-block p-2.5 bg-main">
                get insured now
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet={aaasymbol}
            className="aspect-[1.34] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-2.5"
          />
        </div>
      </div>
    </div>




       <div className="relative w-full max-md:max-w-full max-md:pl-5">
         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
           <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0 pl-6">
             <div className="justify-center self-stretch shadow-xl bg-white relative flex flex-col w-full my-auto p-5 items-start max-md:max-w-full max-md:mt-10">
               <img loading="lazy" src={phone} />
               <header className="self-stretch text-blue-950 text-4xl font-bold leading-9 uppercase mt-1.5 max-md:max-w-full">
                 ELECTRONICS WARRANTY
               </header>
               <div className="self-stretch text-black text-xl font-medium leading-8 mt-1.5 max-md:max-w-full">
                 We exceed our client expectation by offering a superior level of assistance when needed. Get back on the road as soon as possible
               </div>
             </div>
           </div>
           <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0 pl-5">
             <div className="justify-center relative flex grow flex-col pl-7 pr-16 py-7 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
               <header className="text-blue-950 text-5xl font-bold leading-10 uppercase self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-10">
                 Providing unparalleled warranty services
               </header>
               <div className="text-black text-base font-medium leading-6 self-stretch w-full mt-2.5 max-md:max-w-full max-md:mr-1.5">
                 At AAA warranty services, we have always placed an outstanding focus to providing high values to clients through various warranty plans. Offering various protection plans ranging from auto warranty, electronics warranty to home warranty and other value-added services, through sustainable solutions to give you peace of mind.
               </div>
               <a href="#" className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 justify-center mt-2.5 p-2.5">
                 get insured now
               </a>
             </div>
           </div>
         </div>
       </div>

       <form className="flex-col items-stretch self-stretch overflow-hidden relative flex pt-20 pb-20 bg-secondary">
      <div className="relative w-full max-md:max-w-full max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <header className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src= {aaaLogo}
              className="aspect-[2.67] object-contain object-center w-full fill-blue-950 overflow-hidden my-auto max-md:mt-10"
              alt=""
            />
          </header>
          <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-xl font-medium leading-8 max-md:max-w-full">AAA Warranty Services. is an American Company incorporated in Michigan in 2015, internationally licensed to provide 'Extended Warranty' for vehicles, very similar to the manufacturer's original warranty.</h1>{" "}
              <a
                href="#"
                className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 justify-center mt-10 p-2.5 self-start"
              >
                Activate Your Roadside Assistance Policy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>

        </>
  )
}
export default Home;


Home.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}