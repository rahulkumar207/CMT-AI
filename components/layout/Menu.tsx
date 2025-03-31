import Link from "next/link"

export default function Menu() {

	return (
		<>

			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/">
							Home
						</Link>

					</li>
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/page-about-2">About</Link>
					</li>
					<li className="nav-item dropdown menu-item-has-children">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Products
						</Link>
						<div className="dropdown-menu fix">
							<ul className="list-unstyled">
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="cmtai-crm">
										<img src="/assets/imgs/service-3/Layer 2.svg" alt="CMT AI CRM" width={18} height={18} className="mt-1" />


										<span className="ms-2">
											<span className="d-block fw-bold fs-6"> CMT AI CRM</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="cmtai-erp">
										<img src="/assets/imgs/service-3/Layer 2.svg" alt="CMT AI ERP" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">CMT AI ERP</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="cmtai-lms">
										<img src="/assets/imgs/service-3/Layer 2.svg" alt="CMT AI LMS" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">CMT AI LMS</span>
										</span>
									</Link>
								</li>



							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
						</div>
					</li>
					<li className="nav-item dropdown menu-item-has-children">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Services
						</Link>
						<div className="dropdown-menu fix">
							<ul className="list-unstyled">
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/web-development">
										{/* Using an external SVG image */}
										<img src="/assets/imgs/service-3/Layer 2.svg" alt="Web Development" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">Web Development</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/app-deveopment">
										{/* Using an external SVG image */}
										<img src="/assets/imgs/service-3/App.svg" alt="App Development" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">App Development</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/ai-ml-development">
										{/* Using an external SVG image */}
										<img src="/assets/imgs/service-3/Ai.svg" alt="AI/ML Development" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">AI/ML Development</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/cloud-computing">
										{/* Using an external SVG image */}
										<img src="/assets/imgs/service-3/software engineer.svg" alt="Cloud Computing" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">Cloud Computing</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="https://www.cmtai.live/">
										{/* Using an external SVG image */}
										<img src="/assets/imgs/service-3/digital.svg" alt="Digital Marketing" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">Digital Marketing </span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="https://www.cmtai.live/Pr">
										{/* Using an external SVG image */}
										<img src="/assets/imgs/service-3/Group 2.svg" alt="PR Services" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">PR Services</span>
										</span>
									</Link>
								</li>

							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
						</div>
					</li>

					{/* 				
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">Contact</Link>
					</li> */}
				</ul>
			</div>
		</>
	)
}
