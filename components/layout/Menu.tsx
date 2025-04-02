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
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/cmtai-crm">
										<img src="/assets/imgs/service-3/Layer 2.svg" alt="CMT AI CRM" width={18} height={18} className="mt-1" />


										<span className="ms-2">
											<span className="d-block fw-bold fs-6"> CMT AI CRM</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/cmtai-erp">
										<img src="/assets/imgs/service-3/Layer 2.svg" alt="CMT AI ERP" width={18} height={18} className="mt-1" />

										<span className="ms-2">
											<span className="d-block fw-bold fs-6">CMT AI ERP</span>
										</span>
									</Link>
								</li>
								<li className="position-relative z-1 border-bottom">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/cmtai-lms">
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
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/app-development">
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

					{/* <li className="nav-item dropdown has-mega-menu">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Pages
						</Link>
						<div className="mega-menu fix start-50 translate-middle-x">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="mega-menu-content">
											<div className="row">
												
												
												<div className="col-2">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
														</ul>
													</div>
													<div className="position-relative bg-4 rounded-3 mt-5">
														<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
														<div className="position-absolute top-50 start-50 translate-middle z-0">
															<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="cmtai" />
															<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
															<div className="d-flex mt-3 ms-3">
																<img src="/assets/imgs/other/avatar-1.png" alt="cmtai" />
																<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="cmtai" />
																<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="cmtai" />
															</div>
															<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																Get this now
																<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																	<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																	<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																</svg>
															</Link>
														</div>
													</div>
												</div>
												
												<div className="col-2">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
														</ul>
													</div>
													<div className="position-relative bg-4 rounded-3 mt-5">
														<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
														<div className="position-absolute top-50 start-50 translate-middle z-0">
															<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="cmtai" />
															<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
															<div className="d-flex mt-3 ms-3">
																<img src="/assets/imgs/other/avatar-1.png" alt="cmtai" />
																<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="cmtai" />
																<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="cmtai" />
															</div>
															<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																Get this now
																<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																	<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																	<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																</svg>
															</Link>
														</div>
													</div>
												</div>
												<div className="col-2">
													<div className="mega-menu-list">
														<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
														<ul className="list-unstyled">
															<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
															<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
														</ul>
													</div>
													<div className="position-relative bg-4 rounded-3 mt-5">
														<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
														<div className="position-absolute top-50 start-50 translate-middle z-0">
															<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="cmtai" />
															<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
															<div className="d-flex mt-3 ms-3">
																<img src="/assets/imgs/other/avatar-1.png" alt="cmtai" />
																<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="cmtai" />
																<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="cmtai" />
															</div>
															<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																Get this now
																<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																	<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																	<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																</svg>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="position-absolute top-0 start-50 translate-middle-x z-0">
								<img src="/assets/imgs/team-1/bg-line.png" alt="cmtai" />
							</div>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
						</div>
					</li> */}
				</ul>
			</div>
		</>
	)
}
