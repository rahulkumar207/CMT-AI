
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function PageServicesDetails2() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	return (
		<>

			<Layout >

				{/* Other sections */}
				<section className="section-services-details pt-80px pb-120">
					<div className="container">
						<div className="row pt-8">
							<div className="col-lg-8 ps-lg-4 mt-lg-0 mt-8 content">
								<img className="rounded-3" src="/assets/imgs/services-details-2/app-development.png" alt="Software Development, Best Software Developers, Software Solutions, Custom Software Development, Software Development Company, Best Software Development Company for Startups, Best Custom Software Development Services in 2025, Best Agile Software Development Company, Best Software Development for Healthcare Industry, Best Software Development Company for AI Solutions, App Development, Best App Developers, Best App Development Company for E-commerce Businesses, Best Mobile App Developers for iOS and Android, Best Custom App Development Services, Best App Development for Gaming Industry, Best App Development Company for Enterprise Solutions, Best Software Development Company, Best Custom Software Developers, Best Agile Software Solutions, Best Enterprise Software Development, Mobile App Development, iOS and Android App Development, App Development Company, Best Software Development Company for Healthcare Industry, Best Custom Software Development Services for Small Businesses, Best Agile Software Development Company for Scalable Applications, Best Offshore Software Developers for Enterprise Solutions, Best SaaS Software Development Company, Best Mobile App Developers, Best iOS and Android App Development Services, Best App Design Company, Best Mobile App Developers for E-commerce Businesses in 2025, Best App Development Company for Gaming Applications, Best Cross-platform App Developers for Enterprise Solutions, Affordable and Best App Design Services for Startups." />
								<h4 className="my-3">Empowering Businesses with High-Performance App Development</h4>
								<p className="mb-0">At CMT AI, we build innovative, scalable, and feature-rich mobile applications that help businesses grow in the digital age. Our expert team ensures a seamless user experience, high performance, and top-notch security in every app we develop.</p>
								<div className="row mt-5">
									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Business & Productivity Apps	</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">E-Commerce & Marketplace Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Gaming Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Health & Fitness Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Finance & Banking Apps
												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">On-Demand Service Apps
												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI & Chatbot-Powered Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Smart Home & IoT Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Voice Assistant & Speech Recognition Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Blockchain & Decentralized Apps (DApps)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Logistics & Fleet Management Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Car Rental & Ride-Sharing Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Personal Finance & Budgeting Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Auction & Bidding Apps</span>
											</li>
										</ul>
									</div>
									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Social Media & Networking Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Entertainment & Media Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Travel & Navigation Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Education & Learning Apps												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Real Estate & Property Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												News & Magazine Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Government & Public Service Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Recruitment & Job Portal Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Pet Care & Animal Welfare Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Grocery Delivery & Meal Planning Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Parenting & Baby Care Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Automotive & Vehicle Maintenance Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Sports & Fitness Tracking Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Security & Surveillance Apps</span>
											</li>
										</ul>
									</div>
								</div>
															

								<h5 className="pt-3 border-top mb-3 mt-10">Mobile App Development Process</h5>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0"> Discovery & Consultation	</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We begin by understanding your business, target audience, and app requirements<br />
												This phase involves	</p>
											<ul>
												<li>Market & competitor analysis
												</li>
												<li>Defining core app functionalities
												</li>
												<li>Selecting the best technology stack
												</li>
												<li>Outlining the project scope & timelines</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">UI/UX Design & Prototyping												</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Our design team creates a user-friendly, visually engaging interface that ensures the best user experience.<br />
												We focus on:</p>
											<ul>
												<li>Intuitive navigation & user experience
												</li>
												<li>Mobile-first responsive design
												</li>
												<li>Interactive elements for engagement
												</li>
												<li>Wireframing & prototyping before development</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">App Development & Coding</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Using the latest technologies, we develop high-performance mobile applications for Android, iOS, and cross-platform needs. <br />
												Our development includes:</p>
											<ul>
												<li>Native App Development (Swift for iOS, Kotlin for Android)
												</li>
												<li>Cross-Platform Development (Flutter, React Native)
												</li>
												<li>Backend & API Development
												</li>
												<li>Integration of Third-Party Services
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0"> Quality Assurance & Testing</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Before launch, we conduct rigorous testing to ensure seamless performance, security, and reliability.<br />
												Our testing process includes:
											</p>
											<ul>
												<li>Functional testing
												</li>
												<li>Performance & load testing
												</li>
												<li>Security & data protection testing
												</li>
												<li>Cross-device & OS compatibility checks
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
												<h6 className="m-0">App Deployment & Launch</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">
												We handle the entire deployment process, ensuring your app is live on the Apple App Store & Google Play Store without issues. <br />
												This includes:</p>
											<ul>
												<li>App Store & Play Store submission
												</li>
												<li>ASO (App Store Optimization) for better visibility

												</li>
												<li>Final performance enhancements
												</li>
												<li>Live monitoring & user feedback analysis
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(6)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">6</span>
												<h6 className="m-0">Post-Launch Support & Maintenance</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">
												Our job doesn’t end at launch! We provide continuous support, updates, and maintenance <br />
												including:</p>
											<ul>
												<li>Bug fixes & performance updates
												</li>
												<li>Security patches & compliance updates
												</li>
												<li>Feature enhancements based on user feedback
												</li>
												<li>Ongoing monitoring & analytics
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 sidebar">

								<div className="bg-neutral-100 px-5 pb-5 mt-7 rounded-4 border">
									<h6 className="mb-4 mt-3">Service Brochure</h6>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-1.svg" alt="cmtai" />
										<p className="text-900 fs-7 mb-0 ms-3">PDF. Download (25 Mb)</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-2.svg" alt="cmtai" />
										<p className="text-900 fs-7 mb-0 ms-3">DOC. Download (28 Mb)</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-3.svg" alt="cmtai" />
										<p className="text-900 fs-7 mb-0 ms-3">Open on Google Driver</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center">
										<img src="/assets/imgs/services-details/icon-4.svg" alt="cmtai" />
										<p className="text-900 fs-7 mb-0 ms-3">Open on Google Driver</p>
									</Link>
								</div>
								<div className="bg-primary rounded-4 mt-7 position-relative">
									<div className="p-7">
										<h4 className="text-white">
											Providing the <br />
											Ultimate Experience <br />
											in Financial Services
										</h4>
										<Link href="/page-contact-1" className="d-flex align-items-center mt-8 mb-9">
											<img src="/assets/imgs/services-details/icon-contact.svg" alt="cmtai" />
											<div className="ms-3">
												<span className="text-white mb-0 fs-4">Contact Us</span>
												<h5 className="text-white d-block">+01 (24) 568 900</h5>
											</div>
										</Link>
										<Link href="#" className="fw-bold btn text-start bg-white fs-6 d-flex align-items-center justify-content-between text-primary hover-up w-100">
											<span>Get 15 Days Free Trial</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#6D4DF2" />
											</svg>
										</Link>
									</div>
									<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="cmtai" />
								</div>
								<div className="position-relative mb-lg-0 mb-8 d-inline-block fix mt-7">
									<div className="zoom-img rounded-4 fix">
										<img src="/assets/imgs/services-details-2/img-2.png" alt=" Best App Development Company for E-commerce Businesses, Best Mobile App Developers for iOS and Android, Best Custom App Development Services, Best App Development for Gaming Industry, Best App Development Company for Enterprise Solutions, Best Software Development Company, Best Custom Software Developers, Best Agile Software Solutions, Best Enterprise Software Development, Mobile App Development, iOS and Android App Development, App Development Company, Best Software Development Company for Healthcare Industry, Best Custom Software Development Services for Small Businesses, Best Agile Software Development Company for Scalable Applications, Best Offshore Software Developers for Enterprise Solutions, Best SaaS Software Development Company, Best Mobile App Developers, Best iOS and Android App Development Services, Best App Design Company, Best Mobile App Developers for E-commerce Businesses in 2025" />
									</div>
									<div className="position-absolute bottom-0 start-50 translate-middle-x mb-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
										<p className="pt-2 text-900 text-nowrap">
											Loved by over 4k <br />
											happy clients
										</p>
										<div className="d-flex align-items-center justify-content-center py-4">
											<img src="/assets/imgs/features-3/avatar-1.png" alt="cmtai" />
											<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="cmtai" />
											<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="cmtai" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Contact 2*/}
				<section className="section-contact-2 position-relative section-padding bg-5">
					<div className="container position-relative z-1">
						<div className="text-center">
							<h5 className="ds-5 mt-3 mb-3">
								Thinking about a project? <br className="d-md-block d-none" />
								Get in touch with us.
							</h5>
							<span className="fs-5 fw-medium">Connect with Us Today through the Details Below or Fill <br className="d-md-block d-none" />
								Out the Form for a Prompt Response</span>
						</div>
						<div className="row mt-8">
							<div className="col-lg-10 mx-lg-auto">
								<div className="row">
									<div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
										<h4>Leave a message</h4>
										<form action="#">
											<div className="row mt-5">
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Your name *" aria-label="username" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center mt-4 mt-md-0">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="info@" aria-label="email" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Phone" aria-label="phone" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Subject" aria-label="subject" />
													</div>
												</div>
												<div className="col-12">
													<div className="input-group rounded-1 d-flex mt-4">
														<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
															<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																<path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="black" />
															</svg>
														</div>
														<textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="name" placeholder="Describe Your Project in Short" aria-label="With textarea" />
													</div>
												</div>
												<div className="col-12">
													<button type="submit" className="btn btn-primary hover-up mt-4">
														Send Message
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
														</svg>
													</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6">
										<div className="ps-lg-6">
											<h6>Chat with us</h6>
											<p className="text-500">The support team is always available 24/7</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-1.svg" alt="cmtai" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
											</div>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-2.svg" alt="cmtai" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Viber</Link>
											</div>
											<div className="d-flex mb-2 mb-5">
												<img src="/assets/imgs/contact-2/icon-3.svg" alt="cmtai" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Messager</Link>
											</div>
											<h6>Send us an email</h6>
											<p className="text-500">Our team will respond promptly to your inquiries</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-4.svg" alt="cmtai" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">support@cmtai.com</Link>
											</div>
											<div className="d-flex mb-2 mb-5">
												<img src="/assets/imgs/contact-2/icon-4.svg" alt="cmtai" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">sale@cmtai.com</Link>
											</div>
											<h6>For more inquiry</h6>
											<p className="text-500">Reach out for immediate assistance</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-5.svg" alt="cmtai" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+01 (24) 568 900</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}