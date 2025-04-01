
import Faqs1 from "@/components/sections/Faqs1"
import Features4 from "@/components/sections/Features4"
import CRMHero from "@/components/sections/crm-hero"
import HowItWork1 from "@/components/sections/HowItWork1"
import LogoCloud2 from "@/components/sections/LogoCloud2"
import Pricing2 from "@/components/sections/Pricing2"
import Testimonial2 from "@/components/sections/Testimonial2"

import Layout from "@/components/layout/Layout"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <CRMHero />
                <LogoCloud2 />
                <Features4 />
                <Testimonial2 />
               
                <HowItWork1 />
                <Pricing2 />
                <Faqs1 />

            </Layout>
        </>
    )
}