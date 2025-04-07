import Head from "next/head"
import Layout from "@/components/layout/Layout"

import Hero1 from "@/components/sections/Hero1"
import LogoCloud1 from "@/components/sections/LogoCloud1"

import Services1 from "@/components/sections/Services1"

import Trusted from "@/components/sections/Static3"
import CTA from "@/components/sections/Cta2"
import CTA2 from "@/components/sections/Cta6"
import SEO from "@/components/sections/seo"
import Testimonial4 from "@/components/sections/Testimonial4"
import Trusted1 from "@/components/sections/LogoCloud3"
import dynamic from 'next/dynamic'
const Services5 = dynamic(() => import('@/components/sections/Services5'), {
	ssr: false,
}); 


export default function Home() {

	return (
		<>
		<Head>
			<title>Home Page</title>
			<meta name="description" content="Welcome to our homepage. Discover our services and offerings." />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		    <meta name="keywords" content="CMT AI, Completrix Microtechnologies, App Development, Website Development, Digital Marketing, SEO, SMO" />
			
			

			<link rel="icon" href="/favicon.ico" />
		</Head>

			<Layout>
				<Hero1 />
				<LogoCloud1 />
				<Services1 />
				<Trusted />
				<CTA />
				<CTA2 />
				<Services5 />
				<Trusted1 />
				<Testimonial4/>
				<SEO />

			</Layout>
		</>
	)
}