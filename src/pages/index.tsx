import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { ReactElement } from 'react'
import { aaaLogo } from "../../imagesPaths";

 const Home = () => {
  return (
    <>

<div className="flex">
<form className="flex-shrink-0 shadow-xl bg-white flex flex-col p-5 items-start mr-4 w-1/2">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a0c702309e7d203775d1047ecf8e6b0da2dc5a75b10b82e0398bf7f5ac87cdc?apiKey=25adeeab20ac40e68f827a20942f028a&"
      alt="Warranty Image"
      className="aspect-square object-contain object-center w-[89px] overflow-hidden max-w-full"
    />
    <header className="self-stretch text-blue-950 text-4xl font-bold leading-9 uppercase mt-1.5 max-md:max-w-full">
      ELECTRONICS WARRANTY
    </header>
    <div className="self-stretch text-black text-xl font-medium leading-8 mt-1.5 max-md:max-w-full">
      We exceed our client expectation by offering a superior level of assistance when needed. Get back on the road as
      soon as possible
    </div>
  </form>

  <form className="flex-shrink-0 shadow-xl bg-white flex flex-col p-5 items-start mr-4 w-1/2">
    <header className="text-blue-950 text-5xl font-bold leading-10 uppercase self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-10">
      Providing unparalleled warranty services
    </header>
    <div className="text-black text-base font-medium leading-6 self-stretch w-full mt-2.5 max-md:max-w-full max-md:mr-1.5">
      At AAA warranty services, we have always placed an outstanding focus to providing high values to clients through various warranty plans.
      Offering various protection plans ranging from auto warranty, electronics warranty to home warranty and other value-added services, through sustainable solutions to give you peace of mind.
    </div>
    <a href="#" className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 justify-center mt-2.5 p-2.5">
      get insured now
    </a>
  </form>
</div>






    <div className="self-stretch bg-gray-100 pl-12 pr-10 py-12 max-md:px-5">
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
    </>
  );
}

export default Home;

Home.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}
