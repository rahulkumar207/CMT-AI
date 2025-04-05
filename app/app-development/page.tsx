
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Leads from "@/components/sections/lead-form";

import { Metadata } from "next"
// export const metadata: Metadata = {
// title: "app development"
// }
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
									<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="Digital Marketing, Google Analytics, Google Ads, Google My Business, Affiliate Marketing, Search Engine Optimization, SEO, Analytics, Data Analytics, Branding, UX Design, Web Design, Facebook Ads, Social Media Management, Social Media Marketing, CRM Software, Value Proposition, User Testing, Online Marketing, Internet Marketing, Online Advertising, Internet Marketing Agency, Internet Marketing Service, Online Marketing Strategy, Website Advertising" />
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
		
				<Leads	/>

			</Layout>
		</>
	)
}