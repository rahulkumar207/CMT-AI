
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Leads from "@/components/sections/lead-form";

import { Metadata } from "next"
// export const metadata: Metadata = {
// title: "cloud computing"
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
								<img className="rounded-3" src="/assets/imgs/services-details-2/cloud-computing.png" alt="Cloud Computing, Best Cloud Services, Cloud Solutions, Cloud-Based Software, Cloud Infrastructure, Best Cloud Computing Services for Small Businesses, Best Cloud-Based Software Development Solutions, Best Cloud Infrastructure for Enterprise Applications, Best Cloud Services for Data Storage and Security, Best Cloud Solutions for Scalability and Flexibility, Best Cloud Computing Services, Best Cloud Migration Solutions, Top Cloud Hosting Providers, Best Cloud Computing Services for Data Security and Scalability, Top Hybrid Cloud Migration Companies in 2025, Affordable and Best Cloud Hosting Providers for Startups, Best Cloud Infrastructure Management Services" />
								<h4 className="my-3">Cloud Computing Services by CMT AI</h4>
								<p className="mb-0">At CMT AI, we provide cutting-edge cloud computing solutions that ensure scalability, security, and efficiency for businesses of all sizes. Our cloud services help enterprises optimize their operations while reducing infrastructure costs and enhancing performance.</p>
								<div className="row mt-5">
									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Virtual Machines (VMs)	</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Cloud Storage Solutions												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Networking & Content Delivery (CDN)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Load Balancing & Auto Scaling</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Backup & Disaster Recovery
												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Serverless Computing

												</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												API Management & Development</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Database as a Service (DBaaS)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Application Hosting & Development Environments</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												DevOps & CI/CD Pipeline Services</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Cloud-Based CRM Software</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Cloud ERP Solutions</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Online Collaboration & Productivity Apps</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Email & Communication Platforms</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Automated Data Processing & Insights</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Real-Time Cloud Performance Monitoring</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Automated Scaling & Resource Allocation</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Log Management & Analysis</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Cost Optimization & Billing Management</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Incident Response & Troubleshooting</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Automated Cloud Backup Solutions</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Multi-Region Disaster Recovery Plans</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Ransomware Protection & Recovery</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Cloud-Based Data Replication</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												High Availability & Fault Tolerance</span>
											</li>
										</ul>
									</div>
									<div className="col-6">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Cloud-Based Accounting & HR Tools</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Identity & Access Management (IAM)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Data Encryption & Protection</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">Cloud Threat Detection & Response</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Compliance & Risk Management</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Secure Cloud Backup Solutions</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Object Storage (AWS S3, Google Cloud Storage)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												SQL & NoSQL Databases</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Big Data Analytics & Warehousing</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												File Sharing & Synchronization Solutions</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Data Archiving & Retrieval Services</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Virtual Private Cloud (VPC)</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Hybrid & Multi-Cloud Networking</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												VPN & Secure Remote Access</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Network Traffic Monitoring & Optimization</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Edge Computing Solutions</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Legacy Application Migration</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Hybrid Cloud Integration</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Cloud-to-Cloud Migration</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI-Powered Cloud Optimization</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Kubernetes & Container Migration</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												AI Model Training & Deployment</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Cloud-Based Data Science Platforms</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Image & Speech Recognition Services</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<img src="/assets/imgs/services-details/check.svg" alt="cmtai" />
												<span className="ms-2 text-900 fw-medium fs-6">
												Natural Language Processing (NLP) APIs</span>
											</li>
										</ul>
									</div>
								</div>	
								
							
								<h5 className="pt-3 border-top mb-3 mt-10">Cloud Computing Services We Offer</h5>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0"> Cloud Consulting & Strategy</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We assess your business needs and recommend the best cloud solutions, ensuring a seamless transition to the cloud.<br />
											Our approach includes:</p>
											<ul>
												<li>Cloud readiness assessment
												</li>
												<li>Cloud adoption strategy
												</li>
												<li>Cost optimization & ROI analysis
												</li>
												<li>
												Security & compliance consulting</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Cloud Infrastructure & Deployment</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We build and deploy secure, scalable cloud infrastructures customized for your business.<br />
											Our services include:
											</p>
											<ul>
												<li>Private, Public & Hybrid Cloud Solutions
												</li>
												<li>Multi-Cloud Architecture (AWS, Azure, Google Cloud)
												</li>
												<li>Cloud Migration & Deployment
												</li>
												<li>Virtualization & Containerization</li>
											</ul>

										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">Cloud Application Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Our team develops cloud-native applications that are high-performing, flexible, and scalable. <br />
											Key services include:</p>
											<ul>
												<li>Data Encryption & Access Control
												</li>
												<li>Cloud Threat Detection & Response
												</li>
												<li>Disaster Recovery & Backup Solutions
												</li>
												<li>Compliance Management (GDPR, HIPAA, ISO)
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">Cloud Monitoring & Maintenance</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">We provide continuous cloud monitoring and proactive maintenance to ensure optimal performance.<br />
											Our offerings include:
											</p>
											<ul>
												<li>24/7 Cloud Monitoring & Support
												</li>
												<li>Performance & Cost Optimization
												</li>
												<li>Automated Scaling & Resource Allocation
												</li>
												<li>Log Management & Incident Response
												</li>
											</ul>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
												<h6 className="m-0">DevOps & Cloud Automation</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">
											We streamline development and deployment processes with DevOps methodologies, ensuring faster releases and higher efficiency.<br />
											Services include:</p>
											<ul>
												<li>CI/CD Pipeline Implementation
												</li>
												<li>Infrastructure as Code (IaC)

												</li>
												<li>Automated Cloud Deployment & Testing
												</li>
												<li>Container Orchestration (Docker, Kubernetes)
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
									<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="Cloud Computing, Best Cloud Services, Cloud Solutions, Cloud-Based Software, Cloud Infrastructure, Best Cloud Computing Services for Small Businesses, Best Cloud-Based Software Development Solutions, Best Cloud Infrastructure for Enterprise Applications, Best Cloud Services for Data Storage and Security, Best Cloud Solutions for Scalability and Flexibility, Best Cloud Computing Services, Best Cloud Migration Solutions, Top Cloud Hosting Providers, Best Cloud Computing Services for Data Security and Scalability, Top Hybrid Cloud Migration Companies in 2025, Affordable and Best Cloud Hosting Providers for Startups, Best Cloud Infrastructure Management Service" />
								</div>
								<div className="position-relative mb-lg-0 mb-8 d-inline-block fix mt-7">
									<div className="zoom-img rounded-4 fix">
										<img src="/assets/imgs/services-details-2/img-2.png" alt="Affordable Digital Marketing Services in Noida, Website Development Agency in Noida, App Development Services in Noida, Content Marketing Services in Noida, Google Ads Agency in Noida, Best SEO Agency in Noida, Reputation Management Services in Noida, PR and Branding Agency in Noida, Creative Digital Marketing Services in Noida, Social Media Optimization in Noida" />
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
			
               <Leads />
			</Layout>
		</>
	)
}