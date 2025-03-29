import Link from 'next/link'

export default function Footer4() {
	return (
		<>
			<footer>
				<div className=" position-relative d-none d-md-flex">
					<div className="col-6 bg-primary py-md-6" />
					<div className="col-6 bg-primary-dark py-md-6" />
					<div className="container position-absolute top-50 start-50 translate-middle">
						<div className="row">
							<div className="col-6 d-lg-flex gap-5">
								<Link href="/#" className="d-flex mb-lg-0 mb-2">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<p className="text-white mb-0 ms-2">E-23, Sector-3. NOIDA, India</p>
								</Link>
								<Link href="/#" className="d-flex">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<p className="text-white mb-0 ms-2">+91 9818234884</p>
								</Link>
							</div>
							<div className="col-6">
								<div className="d-flex ms-md-5">

									<p className="text-white mb-0 ms-2">For Info : info@cmtai.in , For Careers : hr@cmtai.in</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-footer">
					<div className="container-fluid bg-6">
						<div className="container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10">
									<Link href="/"><img src="assets/imgs/logo/logo-white.svg" alt="infinia" /></Link>
									<p className="text-white fw-medium mt-3 mb-6 opacity-50">Looking for top-notch web and mobile app development without the hefty price tag? We bring you high-quality, scalable, and feature-rich digital solutions at the most affordable rates.</p>
									<div className="d-flex social-icons">
										<Link href="/https://www.facebook.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
												<path d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="white" />
											</svg>
										</Link>
										<Link href="/https://twitter.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-twitter-x" />
										</Link>
										<Link href="/https://www.linkedin.com/" className=" text-white border border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
										<Link href="/https://www.behance.net/" className=" text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-behance" />
										</Link>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-4 col-6">
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Services</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/web-development">Web Development</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/app-deveopment">App Development</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/ai-ml-development">AI/ML Development</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/cloud-computing">Cloud Computing</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="https://www.cmtai.live/">Digital Marketing</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="https://www.cmtai.live/Pr">PR Services</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6">
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Products</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="https://crm.completrix.com/">CMT SMART CRM</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="https://myaibot.in/">AI CHAT BOT</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="https://lms.completrix.com/">CMT SMART LMS</Link>
											</div>
										</div>
										<div className="col-lg-6 pt-5 pt-lg-0">

											<iframe
												src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6001376239083!2d77.31587687578568!3d28.581767686383742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53708916071%3A0x432816975a2fe899!2sCMT%20AI!5e0!3m2!1sen!2sin!4v1743255777213!5m2!1sen!2sin"
												width="400"
												height="250"
												style={{ border: 0, borderRadius: '10px' }}
												loading="lazy"
												referrerPolicy="no-referrer-when-downgrade"
											></iframe>

										</div>

									</div>
								</div>
							</div>
							<div className="row text-center py-4 border-top border-white border-opacity-10">
								<span className="text-white opacity-50">Copyright © 2024 Infinia. All Rights Reserved</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
