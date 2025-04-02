
import Link from "next/link"

export default function Newsletter2() {
	return (
		<>
			<section className="section-newsletter-2 section-padding bg-primary position-relative">
				<div className="container position-relative fix">
					<div className="row align-items-center text-center position-relative z-1">
						<div className="col-lg-6 mx-auto">
							<div className="px-lg-3 text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Join Our Community</span>
								</div>
								<h4 className="my-5 text-white">
									We are trusted by over 52,000+ clients. <br />
									Join them now and grow your business.
								</h4>
								<p className="fs-6 fw-medium text-white">By clicking the button, you are agreeing with our <Link href="#" className="text-decoration-underline link-hover-primary-light text-white">Term  Conditions</Link></p>
								<form className="input-group mt-5 position-relative">
									<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
									<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
										<button type="submit" className="bg-linear-2 px-3 py-3 m-3 fs-7 fw-bold border-0 text-white rounded-pill">Join Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
