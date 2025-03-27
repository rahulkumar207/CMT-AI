"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Services3() {

	const swiperOptions = {
		slidesPerView: 4,
		spaceBetween: 30,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}

	return (
		<>


			<section className="section-services-3  section-padding">
				<div className="container position-relative z-2">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Things We do at CMT AI</span>
						</div>
					</div>
					<div className="row mt-6 position-relative">
						<Swiper {...swiperOptions}
							className="swiper slider-2 px-1"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/Layer 2.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3" style={{ fontSize: "21px" }}>Web Development</h5>
										    <ul className="text-start ps-3 mb-6 service-p">
											<li>Static Website </li>
											<li>Web Application </li>
											<li>React.JS / Next.JS  Based </li>
											<li>E-commerce </li>
											<li>Dynamic Website </li>
										</ul>
										<Link href="web-development" className="text-primary fs-7 fw-bold">
											Explore More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/App.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3" style={{ fontSize: "21px" }}>App Development</h5>
									 
											 <ul className="text-start ps-3 mb-6 service-p">
											
											<li>IOS Development </li>
											<li>App Development </li>
											<li>Flutter Based Development</li>
											<li>React Native Development</li>
											<li>Swift Based Apps</li>
										</ul>
										<Link href="app-deveopment" className="text-primary fs-7 fw-bold">
											Explore More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/Ai.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3" style={{ fontSize: "21px" }}>AI/ML Development</h5>
										   
											 <ul className="text-start ps-3 mb-6 service-p">
											
											<li>Robotic Process Automation</li>
											<li>Speech Recognition</li>
											<li>Deep Learning</li>
											<li>Natural Language Processing</li>
											<li>Facial Recognition</li>
										</ul>
																				<Link href="ai-ml-development" className="text-primary fs-7 fw-bold">
											Explore More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/software engineer.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3" style={{ fontSize: "21px" }}>Cloud Computing</h5>
									
											 <ul className="text-start ps-3 mb-6 service-p">
											
											<li>Cloud/IOT Development</li>
											<li>AR/VR Development</li>
											<li>Cybersecurity Development</li>
											<li>DevOps Engineering</li>
											<li>Blockchain Development</li>
										</ul>										<Link href="cloud-computing" className="text-primary fs-7 fw-bold">
											Explore More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/digital.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3" style={{ fontSize: "21px" }}>Digital Marketing</h5>
										  
											 <ul className="text-start ps-3 mb-6 service-p">
											
											<li>SMM | SEO | SEM</li>
											<li>Influencer Marketing</li>
											<li>Google Search Ads</li>
											<li>Reels and Short Video Creation</li>
											<li>Blog Writing</li>
										</ul>									
										<Link href="https://www.cmtai.live/" className="text-primary fs-7 fw-bold">
											Explore More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/Group 2.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3" style={{ fontSize: "21px" }}>PR Services</h5>
										 
											 <ul className="text-start ps-3 mb-6 service-p">
											
											<li>Advocacy & Lobbying</li>
											<li>Election Campaign Management</li>
											<li>Crisis Communication</li>
											<li>Reputation Management</li>
											<li>Issue-Based Media Campaigns</li>
										</ul>		
										<Link href="https://www.cmtai.live/Pr" className="text-primary fs-7 fw-bold">
											Explore More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>

							</div>
						</Swiper>
						<div className="swiper-button-prev d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white ms-lg-7">
							<i className="bi bi-arrow-left" />
						</div>
						<div className="swiper-button-next d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white">
							<i className="bi bi-arrow-right" />
						</div>
					</div>
				</div>
			</section>


		</>
	)
}
