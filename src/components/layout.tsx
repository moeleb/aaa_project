import { useRouter } from "next/router"
import Navbar from "./navbar";
import  Footer from "./Footer";


interface LayoutProps {
    children :React.ReactNode
}

export const Layout = ({children}:LayoutProps ) => {
    const authenticated = false;
    const router = useRouter();

    return (
        <div className="flex h-screen flex-col">
            <Navbar/>
            <main className="mx-auto w-full grow">{children}</main>

            <Footer/>


        </div>
    )
}