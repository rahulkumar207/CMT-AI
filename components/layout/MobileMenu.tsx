'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

	const toggleDropdown = (key: string) => {
		setActiveDropdown(prevKey => (prevKey === key ? null : key))
	}

	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img src="/assets/imgs/logo/logo-white.svg" alt="cmtai" />
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="/">
												Home
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="/about">About</Link>
										</li>
										<li className={`nav-item dropdown ${activeDropdown === 'product' ? 'show' : ''}`}>
											<Link
												className="nav-link fw-bold d-flex align-items-center"
												href="#"
												role="button"
												onClick={() => toggleDropdown('product')}
												aria-expanded={activeDropdown === 'product'}
											>
												Products
											</Link>
											<div className={`dropdown-menu fix ${activeDropdown === 'product' ? 'show' : ''}`}>
												<ul className="list-unstyled">
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="cmtai-crm">
															<span className="ms-2">
																
																<span className="d-block fw-bold fs-6"> CMT AI CRM</span>
															</span>
														</Link>
													</li>
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="cmtai-erp">
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">CMT AI ERP</span>
															</span>
														</Link>
													</li>
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="cmtai-lms">
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">CMT AI LMS</span>
															</span>
														</Link>
													</li>
												</ul>
											</div>
										</li>
										<li className={`nav-item dropdown ${activeDropdown === 'services' ? 'show' : ''}`}>
											<Link
												className="nav-link fw-bold d-flex align-items-center"
												href="#"
												role="button"
												onClick={() => toggleDropdown('services')}
												aria-expanded={activeDropdown === 'services'}
											>
												Services
											</Link>
											<div className={`dropdown-menu fix ${activeDropdown === 'services' ? 'show' : ''}`}>
												<ul className="list-unstyled">
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/web-development">
															<img src="/assets/imgs/service-3/Layer 2.svg" alt="Web Development" width={18} height={18} className="mt-1" />
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">Web Development</span>
															</span>
														</Link>
													</li>
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/app-development">
															<img src="/assets/imgs/service-3/App.svg" alt="App Development" width={18} height={18} className="mt-1" />
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">App Development</span>
															</span>
														</Link>
													</li>
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/ai-ml-development">
															<img src="/assets/imgs/service-3/Ai.svg" alt="AI/ML Development" width={18} height={18} className="mt-1" />
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">AI/ML Development</span>
															</span>
														</Link>
													</li>
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/cloud-computing">
															<img src="/assets/imgs/service-3/software engineer.svg" alt="Cloud Computing" width={18} height={18} className="mt-1" />
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">Cloud Computing</span>
															</span>
														</Link>
													</li>
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="https://www.cmtai.live/">
															<img src="/assets/imgs/service-3/digital.svg" alt="Digital Marketing" width={18} height={18} className="mt-1" />
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">Digital Marketing</span>
															</span>
														</Link>
													</li>
													<li className="position-relative z-1 border-bottom">
														<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="https://www.cmtai.live/Pr">
															<img src="/assets/imgs/service-3/Group 2.svg" alt="PR Services" width={18} height={18} className="mt-1" />
															<span className="ms-2">
																<span className="d-block fw-bold fs-6">PR Services</span>
															</span>
														</Link>
													</li>
													
												</ul>
											</div>
										</li>
										<li className="nav-item">
											<Link className="nav-link fw-bold d-flex align-items-center" href="/contact">Contact</Link>
										</li>
										
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
