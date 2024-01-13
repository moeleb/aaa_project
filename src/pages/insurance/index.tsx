import { Layout } from '@/components/layout';
import { ReactElement } from 'react';
import { upload } from "../../../imagesPaths";


const Insurance = () => {
  return (
    <form className="justify-center items-stretch shadow-xl bg-white flex flex-col p-10 max-md:max-w-full max-md:px-5">
      <div className="text-blue-950 text-5xl font-bold leading-10 uppercase max-md:max-w-full max-md:text-4xl">
        AUTO INSURANCE FORM
      </div>
      <div className="text-black text-base font-medium leading-7 mt-5 max-md:max-w-full">
        Established in Michigan in 2015, AAA Warranty Services is an American
        company licensed internationally to offer vehicle extended warranties,
        comparable to manufacturers' own. Quickly gaining global traction,{" "}
      </div>{" "}
      <div className="items-stretch flex justify-between gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
        <label className="justify-center items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-blue-950 text-xs font-light max-md:max-w-full">
            First Name
          </div>{" "}
          <input
            type="text"
            className="text-zinc-700 text-opacity-50 text-sm font-black justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
            placeholder="Enter your first name"
          />
        </label>{" "}
        <label className="justify-center items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-blue-950 text-xs font-light max-md:max-w-full">
            Last Name
          </div>{" "}
          <input
            type="text"
            className="text-zinc-700 text-opacity-50 text-sm font-black justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
            placeholder="Enter your last name"
          />
        </label>
      </div>{" "}
      <div className="text-blue-950 text-xs font-light mt-2.5 max-md:max-w-full">
        Email Address
      </div>{" "}
      <input
        type="email"
        className="text-zinc-700 text-opacity-50 text-sm font-black justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
        placeholder="Enter your email address"
      />
      <div className="items-stretch flex gap-2.5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
        <label className="justify-center items-stretch flex grow basis-[0%] flex-col">
          <div className="text-blue-950 text-xs font-light">First Name</div>{" "}
          <input
            type="text"
            className="text-zinc-700 text-opacity-50 text-sm font-black whitespace-nowrap justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950"
            placeholder="Enter your first name"
          />
        </label>{" "}
        <label className="justify-center items-stretch flex grow basis-[0%] flex-col">
          <div className="text-blue-950 text-xs font-light">First Name</div>{" "}
          <input
            type="text"
            className="text-zinc-700 text-opacity-50 text-sm font-black whitespace-nowrap justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950"
            placeholder="Enter your first name"
          />
        </label>{" "}
        <label className="justify-center items-stretch flex grow basis-[0%] flex-col">
          <div className="text-blue-950 text-xs font-light">Last Name</div>{" "}
          <input
            type="text"
            className="text-zinc-700 text-opacity-50 text-sm font-black whitespace-nowrap justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950"
            placeholder="Enter your last name"
          />
        </label>
      </div>{" "}
      <div className="items-stretch flex justify-between gap-2.5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
        <label className="justify-center items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-blue-950 text-xs font-light max-md:max-w-full">
            First Name
          </div>{" "}
          <input
            type="text"
            className="text-zinc-700 text-opacity-50 text-sm font-black justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
            placeholder="Enter your first name"
          />
        </label>{" "}
        <label className="justify-center items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-blue-950 text-xs font-light max-md:max-w-full">
            Last Name
          </div>{" "}
          <input
            type="text"
            className="text-zinc-700 text-opacity-50 text-sm font-black justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
            placeholder="Enter your last name"
          />
        </label>
      </div>{" "}
      <div className="justify-between items-center flex gap-2.5 mt-3 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src= {upload}
          className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
        />{" "}
        <label className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
        <div className="text-blue-950 text-sm font-black max-md:max-w-full">
            Upload Document
        </div>{" "}
        <div className="text-blue-950 text-xs font-black mt-1.5 max-md:max-w-full">
            PNG JPEG <span className="">MAX. 2MB</span>
        </div>
        <input
            type="file"
            accept=".png, .jpeg, .jpg"
            className="text-zinc-700 text-opacity-50 text-sm font-black mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
        />
        </label>

      </div>{" "}

        <div className="flex gap-2.5 mt-4 max-md:flex-wrap max-md:pl-5 justify-end">
        <button
            type="button"
            className="text-blue-950 text-sm font-bold uppercase whitespace-nowrap border p-2.5 border-solid border-blue-950"
        >
            CANCEL
        </button>
        <button
            type="submit"
            className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap border bg-blue-950 justify-center p-2.5"
        >
            SUBMIT
        </button>
        </div>

    </form>
  );
}

export default Insurance;

Insurance.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
