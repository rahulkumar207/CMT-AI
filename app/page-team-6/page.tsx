"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function PageTeam6() {

	const swiperOptions = {
		slidesPerView: 1,
		// spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}

	return (
		<>

			<Layout >

				{/*Team 6*/}
				<section className="section-team-6 section-padding position-relative">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3">Meet Our Team</h3>
								<p className="fs-5">
									Meet the talented and passionate team members who drive our <br />
									company forward every day.
								</p>
							</div>
						</div>
						<div className="row mt-6">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Sarah Brown</Link>
											</h6>
											<p className="mb-0">Co-Founder</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-1.png" alt="cmtai" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Michael Anderson</Link>
											</h6>
											<p className="mb-0">Software Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-2.png" alt="cmtai" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">David Clark</Link>
											</h6>
											<p className="mb-0">Product Manager</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-3.png" alt="cmtai" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Emily Adams</Link>
											</h6>
											<p className="mb-0">UX/UI Designer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-4.png" alt="cmtai" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Jessica Carter</Link>
											</h6>
											<p className="mb-0">DevOps Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-5.png" alt="cmtai" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">William Foster</Link>
											</h6>
											<p className="mb-0">Marketing Specialist</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-6.png" alt="cmtai" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Lauren Graham</Link>
											</h6>
											<p className="mb-0">Sales Executive</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-7.png" alt="cmtai" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">James Bennett</Link>
											</h6>
											<p className="mb-0">Data Analyst</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-8.png" alt="cmtai" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="text-center mt-6">
								<div className="text-center">
									<p className="fs-4 mb-5 text-900">
										Easily Monitor, Control, and Enhance Your Personal and <br />
										Business Finances. Your All-In-One Solution.
									</p>
									<Link href="#" className="btn btn-gradient">
										Get a Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Testimonial 4*/}
				<section className="section-testimonial-4 section-padding position-relative overflow-hidden">
					<div className="container position-relative z-1">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
							</div>
							<h5 className="ds-3 my-3">+500k Satisfied Customers</h5>
							<p className="fs-5">🔥 Don’t just take our words</p>
						</div>
						<div className="row mt-8 justify-content-center">
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-1.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-2.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-3.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-4.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-5.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-6.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-7.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-8.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-9.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-10.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-11.png" alt="" />
							</div>
						</div>
						<div className="row justify-content-center d-none d-lg-flex">
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-12.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-13.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-14.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-15.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-16.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-17.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-18.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-19.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-20.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-21.png" alt="" />
							</div>
						</div>
						<div className="row mt-6">
							<div className="col-lg-6 mx-auto text-center">
								<Swiper {...swiperOptions}
									className="swiper slider-two pt-2 pb-3"
									modules={[Keyboard, Autoplay, Pagination, Navigation]}
								>
									<div className="swiper-wrapper">
										{/* prettier-ignore */}
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="cmtai" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="cmtai" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-3.png" alt="cmtai" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-4.png" alt="cmtai" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Funnel optimization</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="cmtai" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Integrations</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="cmtai" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
									</div>
									<div className="swiper-pagination" />
								</Swiper>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/team-1/bg-line.png" alt="cmtai" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>

			</Layout>
		</>
	)
}