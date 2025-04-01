
import Features from "@/components/sections/lms-features"
import LMSHero from "@/components/sections/lms-hero"
import HowItWork from "@/components/sections/lms-work"
import LogoCloud2 from "@/components/sections/LogoCloud2"
import Testimonial from "@/components/sections/Testimonial4"

import Layout from "@/components/layout/Layout"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <LMSHero />
                <LogoCloud2 />
                <Features />
                <Testimonial />
                <HowItWork />
              

            </Layout>
        </>
    )
}