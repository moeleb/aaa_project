import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { ReactElement } from 'react'
import { aaaLogo } from "../../imagesPaths";

 const Home = () => {
  return (
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
  );
}
export default Home;

Home.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}
