
import Link from "next/link"

export default function Features4() {
	return (
		<>

			<section>
				<div className="container-fluid position-relative bg-linear-3 section-padding">
					<div className="container">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
								<img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Powerful Features</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular">
                            Powerful CRM. Personal Cloud.<br/> Total Control!
							</h3>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={0}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Project Management Tool:  </h6>
									<p className="mb-6">Efficiently oversee projects by tracking expenses and time spent on tasks. Assign multiple team members to tasks and monitor their contributions seamlessly.                                    </p>
									
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">One-Click Invoice Creation:                                    </h6>
									<p className="mb-6">Generate professional invoices effortlessly. Attach relevant files and send them directly to clients, complete with auto-generated PDFs. Support for various tax rates per item and recurring invoices is included.                                    </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Estimates and Proposals:     </h6>
									<p className="mb-6">Quickly create and dispatch estimates to clients. Upon acceptance, estimates can automatically convert to invoices. Craft compelling proposals enriched with images, tables, and videos to captivate potential clients.                                    </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">Leads Management:  </h6>
									<p className="mb-6">Utilize an intuitive Kanban interface to monitor leads and their progression. Features include file attachments, lead-to-customer conversion, email auto-import, proposal creation, and note-taking.</p>
									  
								</div>
							</div>
						</div>
                        <div className="row">
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={0}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Expense Recording:</h6>
									<p className="mb-6">Log company expenditures with ease. Set up recurring expenses that auto-generate based on specified intervals, whether days, weeks, months, or years. Option to bill expenses directly to clients or projects is available.                                     </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">
                                    Payment Recording:</h6>
									<p className="mb-6">Accept and record payments in multiple currencies. Clients can remit payments via platforms like PayPal and Stripe. Each recorded payment is accompanied by an auto-generated PDF receipt.</p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Robust Support System:                                    </h6>
									<p className="mb-6">Implement a comprehensive ticketing system featuring auto-responses, private staff notes, ticket assignments, attachments, predefined replies, knowledge base linking, and customizable priorities and statuses.                                    </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">Knowledge Base:</h6>
									<p className="mb-6">Develop and share informative articles accessible to both clients and staff. A voting system allows users to rate the usefulness of each article, fostering continuous improvement.</p>
									  
								</div>
							</div>
						</div>
                        <div className="row">
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={0}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Staff Task Management:</h6>
									<p className="mb-6">Assign tasks to multiple employees, designate followers, and facilitate task-related discussions through comments and attachments.                                    </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">Contract Management:                                    </h6>
									<p className="mb-6">Streamline the creation and management of client contracts. Generate PDF documents swiftly and dispatch them via the built-in sending feature. Automated reminders notify clients ahead of contract expirations.                                    </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Surveys:  </h6>
									<p className="mb-6">Design and distribute surveys to clients, leads, or staff to gather valuable feedback and insights, aiding in business improvement.                                    </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">Detailed Calendar: </h6>
									<p className="mb-6">Maintain a clear overview of company events, invoice due dates, contract expirations, estimate deadlines, and task completion dates.</p>
									  
								</div>
							</div>
						</div>
                        <div className="row">
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={0}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Company Newsfeed:                                    </h6>
									<p className="mb-6">Share significant company events, upload essential documents, and foster seamless communication among employees.</p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">Goals Tracking:
                                    </h6>
									<p className="mb-6">Establish and monitor business objectives. Notify staff about achievements or areas needing attention, ensuring alignment with company goals.                                    .</p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-5 rounded-4 hover-up">
									<h6 className="my-3 fs-5">Custom Fields:                                    </h6>
									<p className="mb-6">Add personalized fields to various modules such as invoices, estimates, and more, tailoring the CRM to your specific business requirements.                                    </p>
									  
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
									<h6 className="my-3 fs-5">Comprehensive Reports:</h6>
									<p className="mb-6">Access insightful reports covering sales, expenses, customer activities, and more. Utilize custom date filters to analyze data effectively and make informed decisions.</p>
									  
								</div>
							</div>
						</div>
                        
                            
						<div className="row mt-8">
							<div className="col-lg-7">
								<div className="d-flex align-items-center justify-content-lg-end justify-content-center">
									<Link href="#" className="btn btn-gradient">
										Get Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#" className="ms-5 text-decoration-underline fw-bold">How We Work</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
