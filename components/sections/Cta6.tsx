'use client'

import Link from "next/link"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Cta6() {
	return (
		<>
			<section className="section-cta-6 position-relative section-padding fix">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 pe-lg-0">
							<div className="zoom-img rounded-end-lg-0 rounded-4 animation-wrapper border shadow-1 p-5 rounded-end-lg-0">
								<DotLottieReact
									src="https://lottie.host/11a19107-cbff-43d4-ad32-d6137d5ce730/0x86xfj5IN.lottie"
									loop
									autoplay
								/>
							</div>
						</div>
						<div className="col-12 col-lg-6 ps-lg-0 align-self-stretch ">
							<div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Partner Company</span>
								</div>
								<h1 className="fs-1">CMT Live : Results-Driven Digital Growth</h1>
								<p className="mb-9">From digital marketing to powerful PR campaigns, we help businesses grow with data-driven strategies and creative storytelling. Whether you need brand visibility, lead generation, or reputation management, CMT Live delivers measurable results.</p>
								<div className="d-flex flex-md-row flex-column align-items-center justify-content-start">
									<Link href="https://www.cmtai.live/Quotation" className="btn btn-gradient">
										Get Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="https://www.cmtai.live/" className="ms-md-5 mt-md-0 mt-5 text-decoration-underline fw-bold"> Visit Website</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		</>
	)
}
