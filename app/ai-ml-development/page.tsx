
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Leads from "@/components/sections/lead-form";
import { Metadata } from "next"
// export const metadata: Metadata = {
// title: "Ai & Ml"
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
								<img className="rounded-3" src="/assets/imgs/services-details-2/aiml.png" alt="AI Development, ML Solutions, Best AI Developers, AI-Powered Software, Machine Learning Services, Best AI Development Company for Enterprise Solutions, Best Machine Learning Services for Predictive Analytics, Best AI-Powered Software Development Company, Best AI Developers for Natural Language Processing, Best AI Solutions for Business Automation, Best AI Development Services, Best Machine Learning Solutions, Best AI-Powered Software Developers, Best AI Integration Services, Best AI/ML Development Company for Predictive Analytics, Best Artificial Intelligence Solutions for Business Automation, Best Machine Learning Developers for Natural Language Processing (NLP), Best AI-Powered Tools for E-commerce Optimization." />
								<h4 className="my-3">AI & ML Services by CMT AI								</h4>
								<p className="mb-0">At CMT AI, we harness the power of Artificial Intelligence (AI) and Machine Learning (ML) to drive business transformation. Our AI/ML solutions help organizations automate processes, gain valuable insights, and create intelligent systems that enhance decision-making and efficiency.</p>
								<div className="row mt-5">
									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">AI readiness assessment</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Custom AI solution design</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Data strategy & AI roadmap</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Model selection & optimization</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Supervised & unsupervised learning models
												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Predictive analytics & forecasting
												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI-powered recommendations</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Automated anomaly detection</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Chatbots & virtual assistants</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Sentiment analysis & text classification</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Speech recognition & synthesis</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Document processing & summarization</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Facial & object recognition</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Optical Character Recognition (OCR)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI API development & integration</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Continuous model monitoring & improvement</span>
											</li>
										</ul>
									</div>
									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">AI-powered video surveillance</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Image segmentation & enhancement</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Robotic Process Automation (RPA)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">AI-based customer support automation			</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Intelligent document processing</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Workflow optimization with AI</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI-powered data mining & clustering</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Real-time data processing & insights</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI-driven business intelligence (BI)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Data visualization & dashboards</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI-powered medical diagnostics</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Fraud detection & risk assessment</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI-driven personalized healthcare</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Algorithmic trading & financial forecasting</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Model training & optimization</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Cloud & edge AI deployment</span>
											</li>
										</ul>
									</div>
								</div>
								
								
							
								<h5 className="pt-3 border-top mb-3 mt-8">AI & ML Services We Offer</h5>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0"> AI & ML Consulting	</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We analyze your business requirements and develop AI-driven strategies to enhance efficiency and innovation.<br />
											Our services include:</p>
											<ul>
												<li>AI readiness assessment
												</li>
												<li>Custom AI solution design
												</li>
												<li>Data strategy & AI roadmap
												</li>
												<li>
												Model selection & optimization</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Machine Learning Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We develop machine learning models tailored to your business needs, ensuring accuracy and performance.<br />
											Our services include:
											</p>
											<ul>
												<li>Supervised & unsupervised learning models

												</li>
												<li>Predictive analytics & forecasting
												</li>
												<li>AI-powered recommendations
												</li>
												<li>Automated anomaly detection
												</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">Natural Language Processing (NLP)</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Enhance customer interactions and automate text-based processes with advanced NLP solutions. <br />
											Our expertise includes:</p>
											<ul>
												<li>Chatbots & virtual assistants
												</li>
												<li>Sentiment analysis & text classification
												</li>
												<li>Speech recognition & synthesis

												</li>
												<li>Document processing & summarization
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">Computer Vision & Image Processing												</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Leverage AI for image recognition, object detection, and video analytics.<br />
											Our services include:
											</p>
											<ul>
												<li>Facial & object recognition

												</li>
												<li>Optical Character Recognition (OCR)
												</li>
												<li>AI-powered video surveillance
												</li>
												<li>Image segmentation & enhancement
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
												<h6 className="m-0">AI-Powered Automation & RPA</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">
											Streamline workflows and reduce operational costs with AI-driven automation.	<br />
											We offer:</p>
											<ul>
												<li>Robotic Process Automation (RPA)
												</li>
												<li>AI-based customer support automation

												</li>
												<li>Intelligent document processing
												</li>
												<li>Workflow optimization with AI
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(6)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">6</span>
												<h6 className="m-0"> AI for Big Data & Analytics</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">
											Unlock deep insights from vast data sources with AI-driven analytics.<br />
											Our solutions include:</p>
											<ul>
												<li>AI-powered data mining & clustering
												</li>
												<li>Real-time data processing & insights
												</li>
												<li>AI-driven business intelligence (BI)
												</li>
												<li>Data visualization & dashboards
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 7 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(7)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">7</span>
												<h6 className="m-0"> AI in Healthcare & Finance</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">
											Industry-specific AI solutions tailored for healthcare, finance, and other domains. <br />
											Services include:</p>
											<ul>
												<li>
												AI-powered medical diagnostics
												</li>
												<li>
												Fraud detection & risk assessment
												</li>
												<li>AI-driven personalized healthcare
												</li>
												<li>Algorithmic trading & financial forecasting
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 8 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(8)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">8</span>
												<h6 className="m-0"> AI & ML Model Deployment & Integration												</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">
											We ensure seamless deployment and integration of AI/ML models into your existing systems..<br />
											Our solutions include:</p>
											<ul>
												<li>Model training & optimization
												</li>
												<li>Cloud & edge AI deployment
												</li>
												<li>AI API development & integration
												</li>
												<li>Continuous model monitoring & improvement
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
									
								</div>
								<div className="bg-primary rounded-4 mt-7 position-relative">
									<div className="p-7">
										<h4 className="text-white">
											Providing the <br />
											Ultimate Experience <br />
											in AI & ML Services
										</h4>
										<Link href="/page-contact-1" className="d-flex align-items-center mt-8 mb-9">
											<img src="/assets/imgs/services-details/icon-contact.svg" alt="cmtai" />
											<div className="ms-3">
												<span className="text-white mb-0 fs-4">Contact Us</span>
												<h5 className="text-white d-block">+91 9818234884</h5>
											</div>
										</Link>
										
									</div>
									<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="Digital Marketing, Google Analytics, Google Ads, Google My Business, Affiliate Marketing, Search Engine Optimization, SEO, Analytics, Data Analytics, Branding, UX Design, Web Design, Facebook Ads, Social Media Management, Social Media Marketing, CRM Software, Value Proposition, User Testing, Online Marketing, Internet Marketing, Online Advertising, Internet Marketing Agency, Internet Marketing Service, Online Marketing Strategy, Website Advertising." />
								</div>
								<div className="position-relative mb-lg-0 mb-8 d-inline-block fix mt-7">
									<div className="zoom-img rounded-4 fix">
										<img src="/assets/imgs/services-details-2/img-2.png" alt="Affordable Digital Marketing Services in Noida, Website Development Agency in Noida, App Development Services in Noida, Content Marketing Services in Noida, Google Ads Agency in Noida, Best SEO Agency in Noida, Reputation Management Services in Noida, PR and Branding Agency in Noida, Creative Digital Marketing Services in Noida, Social Media Optimization in Noida." />
									</div>
									<div className="position-absolute bottom-0 start-50 translate-middle-x mb-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
										<p className="pt-2 text-900 text-nowrap">
											Loved by over 1k <br />
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
				
			< Leads />

			</Layout>
		</>
	)
}