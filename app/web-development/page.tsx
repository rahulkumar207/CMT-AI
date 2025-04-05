
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Leads from "@/components/sections/lead-form";

import { Metadata } from "next"
// export const metadata: Metadata = {
// title: "web development"
// }
export default function PageServicesDetails2() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	return (
		<>

			<Layout>

				{/* Other sections */}
				<section className="section-services-details pt-80px pb-120">
					<div className="container">
						<div className="row pt-8">
							<div className="col-lg-8 ps-lg-4 mt-lg-0 mt-8 content">
								<img className="rounded-3" src="/assets/imgs/services-details-2/web-development.png" alt="Web Development, Web Design Services, Best Web Developers, Web Development Company, Custom Web Development, Best Web Development Company for Small Businesses, Best Custom Web Design and Development Services, Best Web Development Services for E-commerce, Best Web Developers for Responsive Websites, Best Web Development Company for Enterprise Solutions, Best Web Development Company, Best Web Design Services, Best Custom Web Development, Best E-commerce Website Developers, Best Responsive Web Design, Best Web Development Company for Startups, Best Custom Web Design and Development Services in 2025, Best WordPress Website Developers for Businesses, Best E-commerce Web Developers for Online Stores, Best Responsive Website Development Company" />
								<h4 className="my-3">Empowering Businesses with High-Performance Website Development</h4>
								<p className="mb-0">At CMT AI, we specialize in custom website development, offering innovative, scalable, and SEO-friendly solutions tailored to your business needs. Whether you need a corporate website, eCommerce platform, or custom web application, our expert developers ensure a seamless digital experience.</p>

								<div className="row mt-5">
									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Company Profile Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Portfolio Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Consulting Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Law Firm Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Agency Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Single Vendor E-Commerce Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Multi-Vendor Marketplaces</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Dropshipping Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Subscription-Based E-Commerce</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Blogs & News Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Wiki & Knowledge Base Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Online Course & LMS Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Non-Profit & Charity Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Social Networking Platforms</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Forum & Discussion Websites</span>
											</li>
										</ul>
									</div>

									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Membership & Subscription Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Video Streaming Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Music Streaming Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Online Magazine Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Gaming & Esports Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Hotel & Travel Booking Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Doctor & Healthcare Appointment Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Salon & Spa Booking Platforms</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Event Ticket Booking Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Property Rental Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Real Estate Agency Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Property Marketplace Websites</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Fintech & Investment Platforms</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="check" />
												<span className="ms-2 text-900 fw-medium fs-6">Online Banking & Loan Management Websites</span>
											</li>
										</ul>
									</div>
								</div>


								<h5 className="pt-3 border-top mb-3 mt-5">Website Development Process
								</h5>
								<div className="accordion mt-5">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0">Discovery & Consultation</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We start by understanding your business, target audience, and project requirements. Our team conducts detailed discussions to gather insights and define key objectives.<br />
												This stage includes: 	</p>
											<ul>
												<li>Requirement gathering</li>
												<li>Competitor analysis</li>
												<li>Defining website goals</li>
												<li>Technology stack selection</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Planning & Strategy	</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Based on the insights from the discovery phase, we create a strategic plan outlining the website structure, functionalities, and user experience.<br />
												This phase involves: </p>
											<ul>
												<li>Sitemap creation	</li>
												<li>Wireframing & prototyping</li>
												<li> Content strategy development</li>
												<li>Setting project timelines</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">UI/UX Design</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Our design team crafts an intuitive and visually appealing interface, ensuring a seamless user experience across devices.<br />
												We focus on: 	</p>
											<ul>
												<li> User-friendly navigation</li>
												<li>Mobile-first responsive design</li>
												<li>Brand-aligned aesthetics</li>
												<li>Interactive elements for engagement	</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">Development & Coding</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Once the design is finalized, our developers bring it to life using the latest technologies. We follow best coding practices for performance and scalability. <br />
												This stage includes: </p>
											<ul>
												<li> Front-end development (HTML, CSS, JavaScript, React, or Vue.js)</li>
												<li> Back-end development (Node.js, PHP, Python, etc.)</li>
												<li>Database integration</li>
												<li> API development</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
												<h6 className="m-0">Testing & Quality Assurance</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We conduct rigorous testing to ensure the website is error-free, responsive, and optimized for performance.<br />
												Our testing process includes: 	</p>
											<ul>
												<li> Functional testing	</li>
												<li> Performance testing</li>
												<li>Security testing</li>
												<li>Cross-browser & device compatibility testing</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(6)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">6</span>
												<h6 className="m-0">Deployment & Launch</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">After successful testing, we deploy the website on a live server. Our team ensures a smooth transition from development to production,<br />
												including:</p>
											<ul>
												<li> Hosting setup	</li>
												<li>  Domain configuration</li>
												<li>SSL certificate installation</li>
												<li>Final optimization for speed & SEO</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 7 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(7)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">7</span>
												<h6 className="m-0">Post-Launch Support & Maintenance</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Our commitment doesn’t end at deployment. We provide ongoing support to ensure your website remains updated and secure.<br />
												Our services include:</p>
											<ul>
												<li> Bug fixes & updates	</li>
												<li> Performance monitoring</li>
												<li>Security patches</li>
												<li>Content updates</li>
											</ul>

										</div>
									</div>


								</div>
							</div>
							<div className="col-lg-4 sidebar">
								<div className="bg-neutral-100 px-5 pb-5 mt-7 rounded-4 border">
									<h6 className="mb-4 mt-3">Service Brochure</h6>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-1.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										<p className="text-900 fs-7 mb-0 ms-3">PDF. Download (25 Mb)</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-2.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										<p className="text-900 fs-7 mb-0 ms-3">DOC. Download (28 Mb)</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-3.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										<p className="text-900 fs-7 mb-0 ms-3">Open on Google Driver</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center">
										<img src="/assets/imgs/services-details/icon-4.svg" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
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
											<img src="/assets/imgs/services-details/icon-contact.svg" alt="Get High DA (Domain Authority) Backlinks, Collect Google My Business Reviews & Ratings, List Business on Local Directories (Justdial, Sulekha, Clutch, GoodFirms), Write Guest Posts & Answer Questions on LinkedIn, Quora, Medium, Reddit, Publish Press Releases on PR Websites" />
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
									<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="Get High DA (Domain Authority) Backlinks, Collect Google My Business Reviews & Ratings, List Business on Local Directories (Justdial, Sulekha, Clutch, GoodFirms), Write Guest Posts & Answer Questions on LinkedIn, Quora, Medium, Reddit, Publish Press Releases on PR Websites" />
								</div>
								<div className="position-relative mb-lg-0 mb-8 d-inline-block fix mt-7">
									<div className="zoom-img rounded-4 fix">
										<img src="/assets/imgs/services-details-2/img-2.png" alt="Best digital marketing company in Noida for startups, Affordable website development services in Noida, Top social media marketing agency for small businesses in Noida, Custom mobile app development in Noida, Google Ads and Facebook Ads management in Noida, SEO and content marketing services in Noida, Professional PR services for startups in Noida, WordPress website design services in Noida, Top-rated branding agency in Noida, Best PPC management services in Noida" />
									</div>
									<div className="position-absolute bottom-0 start-50 translate-middle-x mb-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
										<p className="pt-2 text-900 text-nowrap">
											Loved by over 4k <br />
											happy clients
										</p>
										<div className="d-flex align-items-center justify-content-center py-4">
											<img src="/assets/imgs/features-3/avatar-1.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
											<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
											<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			
    <Leads />
			</Layout>
		</>
	)
}