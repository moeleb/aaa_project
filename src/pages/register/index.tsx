import { aaaLogo } from "../../../imagesPaths";
import Link from 'next/link';
const Register = () => {
    return (
        <div className="bg-main min-h-screen flex justify-center items-center">

        <form className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:px-5">
          <header className="justify-center items-center shadow-xl bg-white flex w-[566px] max-w-full flex-col px-10 py-11 max-md:px-5">
            <img
              loading="lazy"
              src= {aaaLogo}
              alt="Logo"
              className="aspect-[2.64] object-contain object-center w-[206px] fill-blue-950 overflow-hidden self-center max-w-full"
            />
            <h1 className="self-stretch text-blue-950 text-4xl font-bold leading-9 uppercase mt-12 max-md:max-w-full max-md:mt-10">
              Sign Up
            </h1>
            <div className="items-stretch self-stretch flex justify-between gap-2.5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
              <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                <label htmlFor="firstName" className="text-blue-950 text-xs font-light">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  aria-label="John"
                  className=" text-opacity-50 text-sm font-black whitespace-nowrap justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950"
                  placeholder="John"
                />
              </div>
              <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                <label htmlFor="lastName" className="text-blue-950 text-xs font-light">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  aria-label="Doe"
                  className="text-zinc-700 text-opacity-50 text-sm font-black whitespace-nowrap justify-center items-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="text-blue-950 text-xs font-light self-stretch mt-2.5 max-md:max-w-full">
              Email Address
            </div>
            <input
              type="email"
              aria-label="Email Address"
              className="text-zinc-700 text-opacity-50 text-sm font-black justify-center items-stretch self-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
              placeholder="JohnDoe@gmail.com"
            />
            <div className="text-blue-950 text-xs font-light self-stretch mt-2.5 max-md:max-w-full">
              Password
            </div>
            <input
              type="password"
              className="text-zinc-700 text-opacity-50 text-sm font-black justify-center items-stretch self-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950 max-md:max-w-full"
            />
            <div className="flex items-center self-stretch justify-start gap-2.5 mt-2.5">
            <input
              type="checkbox"
              id="remember-me"
              className="border w-4 h-4 border-solid border-blue-950"
            />
            <label htmlFor="remember-me" className="text-blue-950 text-xs font-light">
              Remember Me
            </label>
          </div>
            <a
              href="/login"
              className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 aspect-[1.8108108108108107] justify-center mt-2.5 p-2.5 self-start"
            >
              Register
            </a>
            <div className="self-stretch text-blue-950 text-xs font-light whitespace-nowrap mt-2.5">
          Forgot Password? <span className="font-bold underline ">Reset Now</span>
        </div>
        <div className="self-stretch text-blue-950 text-xs font-semibold whitespace-nowrap mt-10">
          Already Have An Account?
        </div>
            <Link
              href="/login"
              className="text-blue-950 text-sm font-bold uppercase whitespace-nowrap items-stretch border aspect-[1.8108108108108107] justify-center mt-2.5 p-2.5 border-solid border-blue-950 self-start"
            >
              Login
            </Link>
          </header>
        </form>
    
    </div>
      );
}

export default Register ;