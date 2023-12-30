import { Layout } from "@/components/layout"
import { ReactElement } from "react"

const AboutUsPage = () => {
    return (
        <div className="pl-3 text-lg">Hi</div>
    )
}
export default AboutUsPage 
AboutUsPage.getLayout = function getLayout(page: ReactElement){
    return <Layout>{page}</Layout>
}