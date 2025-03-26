import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Features1 from "@/components/sections/Features1"
import Features2 from "@/components/sections/Features2"
import Features3 from "@/components/sections/Features3"
import Hero1 from "@/components/sections/Hero1"
import LogoCloud1 from "@/components/sections/LogoCloud1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing1 from "@/components/sections/Pricing1"
import Services1 from "@/components/sections/Services1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Services from "@/components/sections/Services3"
import Trusted from "@/components/sections/Static3"
import CTA from "@/components/sections/Cta2"
import CTA2 from "@/components/sections/Cta6"
import Project11 from "@/components/sections/Project1"
import Testimonial from "@/components/sections/Testimonial4"
import Trusted1 from "@/components/sections/LogoCloud3"
import dynamic from 'next/dynamic'
const Services5 = dynamic(() => import('@/components/sections/Services5'), {
	ssr: false,
}); 
import Testimonial2 from "@/components/sections/Testimonial2"


export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<Hero1 />
				<LogoCloud1 />
				<Services />
				<Trusted />
				{/* <Features1 /> */}
				<CTA />
				<Project11 />
				<CTA2 />
				<Services5 />
				<Trusted1 />
				<Testimonial/>
				{/* <Testimonial2/> */}
				{/* <Features2 />
				<Features3 />
				<Services1 />
				<Team1 />
				<Pricing1 />
				<Testimonial1 />
				<Blog1 />
				<Newsletter1 /> */}

			</Layout>
		</>
	)
}