import { aaaLogo } from "../../../imagesPaths";
import Link from 'next/link';

const Login = () => {


return (
  <div className="bg-main min-h-screen flex justify-center items-center">

    <form className="justify-center items-center self-stretch bg-main flex flex-col px-16 py-12 max-md:px-5">
      <header className="justify-center items-center shadow-xl bg-white flex w-[400px] max-w-full flex-col my-10 px-10 py-11 max-md:my-10 max-md:px-5">
        <img
          loading="lazy"
          src= {aaaLogo}
          className="aspect-[2.64] object-contain object-center w-[206px] fill-blue-950 overflow-hidden self-center max-w-full"
          alt="Logo"
        />
        <div
          className="self-stretch text-blue-950 text-4xl font-bold leading-9 uppercase whitespace-nowrap mt-12 max-md:mt-10"
        >
          Login
        </div>
        <label htmlFor="email-address" className="text-blue-950 text-xs font-light self-stretch mt-2.5">
          Email Address
        </label>
        <input
          id="email-address"
          type="email"
          className="text-zinc-700 text-opacity-50 text-sm font-black whitespace-nowrap justify-center items-stretch self-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950"
          aria-label="Email Address"
        />
        <label htmlFor="password" className="text-blue-950 text-xs font-light self-stretch mt-2.5">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="text-zinc-700 text-opacity-50 text-sm font-black whitespace-nowrap justify-center items-stretch self-stretch mt-1.5 px-5 py-4 border-[0.5px] border-solid border-blue-950"
          aria-label="Password"
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
          href="#"
          className="text-cyan-400 text-sm font-bold uppercase whitespace-nowrap items-stretch bg-blue-950 aspect-[1.8108108108108107] justify-center mt-2.5 p-2.5 self-start"
          aria-label="Login Button"
          role="button"
        >
          Login
        </a>
        <div className="self-stretch text-blue-950 text-xs font-light whitespace-nowrap mt-2.5">
          Forgot Password? <span className="font-bold underline ">Reset Now</span>
        </div>
        <div className="self-stretch text-blue-950 text-xs font-semibold whitespace-nowrap mt-10">
          Don’t Have An Account?
        </div>
        <Link
          href="/register"
          className="text-blue-950 text-sm font-bold uppercase items-stretch border self-stretch justify-center mt-2.5 p-2.5 border-solid border-blue-950"
          aria-label="Sign Up Button"
          role="button"
        >
          Sign up now
        </Link>
      </header>
    </form>
    </div>
  );

}

export default  Login ;