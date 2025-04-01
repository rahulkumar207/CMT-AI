
import Features from "@/components/sections/crm-features"
import CRMHero from "@/components/sections/crm-hero"
import HowItWork from "@/components/sections/crm-work"
import LogoCloud2 from "@/components/sections/LogoCloud2"
import Testimonial2 from "@/components/sections/Testimonial2"

import Layout from "@/components/layout/Layout"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <CRMHero />
                <LogoCloud2 />
                <Features />
                <Testimonial2 />
               
                <HowItWork />
              

            </Layout>
        </>
    )
}