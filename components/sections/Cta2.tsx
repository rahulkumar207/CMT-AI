'use client'
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'

export default function Cta2() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<section className="section-cta-2 bg-3 position-relative section-padding fix">
				<div className="container">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why We Are The Best</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular"><span className=" fw-bold"> Top-Tier Development, Startup-Friendly Costs!</span> </h3>
					</div>
					<div className="row">
						<div className="col-lg-5 pe-lg-0">
							<div className="bg-linear-1 text-center rounded-4 position-relative">
								<img className="rounded-4 border border-2 border-white mb-10 mt-5" src="/assets/imgs/cta-2/img-2.png" alt="CMT AI | CMT AI NOIDA | We Create Android App | IOS App | Website | Cloud Technology | Digital Marketing , SEO , SMO. Web application development, Mobile app development, Software engineering, Software solutions provider, Software development lifecycle, Software architecture, Software coding, Software testing, Software deployment, Software maintenance, Front-end development, Back-end development, Full-stack development, Cloud-based software development, Enterprise software development, Open-source software development, Rapid application development, Prototype development, Application programming interface (API) development, Software integration, Database development, UI/UX design and development, Software,completrix,completrix microtechnologies pvt ltd" />
								<div className="position-absolute bottom-0 left-0 mb-3 w-100">
									
								</div>
								<div className="position-absolute top-0 end-0">
									<img className="flickering" src="/assets/imgs/cta-2/star-2.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
								</div>
								<div className="position-absolute bottom-0 start-0">
									<img className="alltuchtopdown" src="/assets/imgs/cta-2/star-1.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1 ps-lg-0 pe-lg-5 mt-lg-0 mt-6">
							<h5 className="ds-5">Affordable Innovation for Every Business!</h5>
							<p className="fs-5 text-500">From sleek websites to powerful mobile apps, we provide top-tier development services at unbeatable prices. Quality, efficiency, and affordability—all in one place!</p>
							<div className="d-md-flex align-items-center mt-4 mb-5">
								<ul className="list-unstyled phase-items mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="cm#Website Development #App Development #Digital Marketing #SEO Servicestai" />
										<span className="ms-2 text-900 fw-medium fs-6">Best For IT Consulting</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										<span className="ms-2 text-900 fw-medium fs-6">Save Money  Time</span>
									</li>
								</ul>
								<ul className="list-unstyled phase-items ms-md-5 mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										<span className="ms-2 text-900 fw-medium fs-6">Innovative Approaches</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										<span className="ms-2 text-900 fw-medium fs-6">100% Satisfaction</span>
									</li>
								</ul>
							</div>
							<div className="row position-relative mt-5 mt-md-0">
								<div className="col-md-6 d-flex align-items-center">
									<div className="rounded-circle">
										<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/cta-2/avatar-1.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
									</div>
									<div className="ms-3">
										<img className="filter-invert" src="/assets/imgs/cta-2/name-ad.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										<h6 className="mt-1">Anurag Singh <span className="text-500 fs-6">, CTO</span></h6>
									</div>
								</div>
								<div className="col-md-6 d-flex align-items-center">
									<span className="line-verticarl border-start h-50 pe-8 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h2 className="count ds-2 fw-black text-primary">+<span className="odometer" />
												<CountUp end={8} enableScrollSpy={true} />
											</h2>
										</div>
									</div>
									<p className="ms-3 fs-5">Years’ <br /> Experience</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
