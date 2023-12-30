import { useRouter } from "next/router";
import Image from "next/image";
import { servicesLogo } from "../../imagesPaths";
import Link from "next/link";

const tabs = [
    {
        id: 1,
        name: "Home",
        url: "/"

    },
    {
        id: 2,
        name: "AboutUs",
        url: "/about-us"
    },
    {
        id: 3,
        name: "services",
        url: "/services"
    },
    {
        id:4,
        name: "insured",
        url: "/insured-now"
    },
    {
        id: 5,
        name: "login",
        url: "/login"
    }

]


const Navbar = () => {
    const {push, pathname} = useRouter()
    return (
        <nav className="bg-white h-[75px] w-full">
            <div className="flex items-center justify-between pt-5">
            <div className="pl-10">
            <Image src={servicesLogo} alt= "Services Logo" width={94} height={35} />                
            </div>
            <div className=" flex items-center pr-10">
                <ul className="flex flex-row gap-x-11">
                    {
                        tabs.map((tab) => (
                            <li key={tab.id}>
                                <Link href={tab.url}>
                                    {tab.name}
                                </Link>

                            </li>
               ))
                    }
                </ul>
                </div>
                </div>
        </nav>
    )
}

export default Navbar;