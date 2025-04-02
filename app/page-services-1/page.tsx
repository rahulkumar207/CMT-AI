
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Services1 from "@/components/sections/Services1"
import Testimonial4 from "@/components/sections/Testimonial4"


export default function PageServices1() {

	return (
		<>

			<Layout >

				<Services1 />
				
				{/*Logo cloud 5*/}
				<section className="section-logo-cloud section-logo-cloud-5 position-relative">
					<div className="container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3 pb-lg-0 pb-8">
									<h4 className="text-nowrap">Our Technology Alliance<br />	
									</h4>
									<p className="pt-2 pb-4">Programming Languages We Work With </p>
									<Link href="#" className="shadow-1 btn text-start bg-white d-inline-block text-primary hover-up">
										View our partners
										<svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
											<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
										</svg>
									</Link>
								</div>
								<div className="col-lg-9 ps-lg-8">
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="services-page-img" src="/assets/imgs/logo-cloud/12.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud/2.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud/3.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud/4.png" alt="cmtai" />
									</div>
									
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud/5.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="services-page-img" src="/assets/imgs/logo-cloud/6.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="services-page-img" src="/assets/imgs/logo-cloud/7.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud/8.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="services-page-img" src="/assets/imgs/logo-cloud/9.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud/10.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="services-page-img" src="/assets/imgs/logo-cloud/11.png" alt="cmtai" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud/1.png" alt="cmtai" />
									</div>
								</div>
							</div>
						</div>
						<div className="bouncing-blobs-container rounded-4 fix">
							<div className="bouncing-blobs-glass rounded-4" />
							<div className="bouncing-blobs">
								<div className="bouncing-blob bouncing-blob--green" />
								<div className="bouncing-blob bouncing-blob--primary" />
								<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
							</div>
						</div>
					</div>
				</section>
				{/*Testimonial 4*/}
				<Testimonial4/>
				
				

			</Layout>
		</>
	)
}