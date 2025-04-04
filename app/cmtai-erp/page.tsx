
import Features from "@/components/sections/erp-features"
import ERPHero from "@/components/sections/erp-hero"
import HowItWork from "@/components/sections/erp-work"
import LogoCloud2 from "@/components/sections/LogoCloud2"
import Testimonial from "@/components/sections/Testimonial4"

import Layout from "@/components/layout/Layout"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <ERPHero />
                <LogoCloud2 />
                <Features />
                <Testimonial />              
                <HowItWork />
            </Layout>
        </>
    )
}