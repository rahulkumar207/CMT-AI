'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function HowItWork1() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<section className="howitwork-1 section-padding position-relative fix">
				<div className="container position-relative z-1">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
							<img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Book a Free Demo Today!</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular" data-aos="fade-zoom-in" data-aos-delay={100}>Ready to Elevate Your Business</h3>
						<p className="fs-5 mb-0" data-aos="fade-zoom-in" data-aos-delay={200}>Experience the power of CMT SMART CRM – the ultimate solution for managing customers,<br/> automating workflows, and boosting productivity.</p>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/howitwork-1/img-bg-line.png" alt="cmtai" />
				</div>
				<div className="container position-relative z-1">
					<div className="position-relative">
						<div className="position-lg-absolute top-0 start-0 bottom-0 w-lg-50 d-flex flex-column justify-content-between m-lg-10 pb-lg-0 pb-5 z-1">
							<div className="d-flex feature-item">
								<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
									<div className="icon">
										<img src="/assets/imgs/howitwork-1/icon-1.svg" alt="cmtai" />
									</div>
								</div>
								<div data-aos="fade-zoom-in" data-aos-delay={100}>
									<h5 className="text-lg-white text-900">01. Choose a Time That Suits You</h5>
									<p className="text-lg-white text-900 opacity-75">Select a convenient date and time from <br /> our available slots. No back-and-forth  <br />emails—just pick and proceed!
                                    </p>
								</div>
							</div>
							<div className="d-flex feature-item position-relative z-1">
								<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
									<div className="icon">
										<img src="/assets/imgs/howitwork-1/icon-2.svg" alt="cmtai" />
									</div>
								</div>
								<div data-aos="fade-zoom-in" data-aos-delay={200}>
									<h5 className="text-lg-white text-900">02. Share Your Business Needs</h5>
									<p className="text-lg-white text-900 opacity-75">Tell us about your business challenges and<br /> goals. Our experts will tailor the demo <br /> to address your specific requirements.
                                    </p>
								</div>
							</div>
							<div className="d-flex feature-item">
								<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
									<div className="icon">
										<img src="/assets/imgs/howitwork-1/icon-3.svg" alt="cmtai" />
									</div>
								</div>
								<div data-aos="fade-zoom-in" data-aos-delay={300}>
									<h5 className="text-lg-white text-900">03. Join the Meeting & Get Insights</h5>
									<p className="text-lg-white text-900 opacity-75">AConnect with our CRM specialists, explore <br />CMT SMART CRM in action, and discover <br />how it can streamline your operations.</p>
								</div>
							</div>
							<div className="dashed-line-1 d-none d-lg-block" />
							<div className="dashed-line-2 d-none d-lg-block" />
						</div>
						<div className="position-relative d-inline-block">
							<img className="rounded-3 w-100 img-fluid" src="/assets/imgs/howitwork-1/crm-work1.png" alt="cmtai" />
							<div className="bg-linear-primary rounded-3 position-absolute top-0 start-0 w-75 h-100" />
							<div className="position-absolute bottom-0 end-0 m-md-8 m-4">
								<div className="d-flex align-items-center justify-content-center">
									
									<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
									<Link href="https://calendly.com/completrix/project-discussion-session" className="btn btn-gradient d-none d-md-block rounded-4">
									Discuss with Our Expert
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
			</section>
		</>
	)
}
