import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import OffCanvas from '../OffCanvas'
import Menu from '../Menu'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<header>
					<nav
						className={`navbar navbar-expand-lg navbar-light w-100 z-999 navbar-stick`}
						style={{
							position: `${scroll ? "fixed" : "relative"}`,
							top: `${scroll ? "0" : "auto"}`,
							width: "100%",
							zIndex: 9999,
							padding: "10px", // Added padding: 0
						}}
					>
					<div className="container">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/" style={{ maxWidth: '150px'}}>
								<img
									src={"/assets/imgs/logo/logo-white.svg"} 
									alt="CMT AI | CMT AI NOIDA | We Create Android App | IOS App | Website | Cloud Technology | Digital Marketing , SEO , SMO. Web application development, Mobile app development, Software engineering, Software solutions provider, Software development lifecycle, Software architecture, Software coding, Software testing, Software deployment, Software maintenance, Front-end development, Back-end development, Full-stack development, Cloud-based software development, Enterprise software development, Open-source software development, Rapid application development, Prototype development, Application programming interface (API) development, Software integration, Database development, UI/UX design and development, Software,completrix,completrix microtechnologies pvt ltd, Digital Marketing, Google Analytics, Google Ads, Google My Business, Affiliate Marketing, Search Engine Optimization, SEO, Analytics, Data Analytics, Branding, UX Design, Web Design, Facebook Ads, Social Media Management, Social Media Marketing, CRM Software, Value Proposition, User Testing, Online Marketing, Internet Marketing, Online Advertising, Internet Marketing Agency, Internet Marketing Service, Online Marketing Strategy, Website Advertising" 
								/>
						</Link>
						<Menu/>
						<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
							<div  data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop" onClick={handleSearch} className='cursor-pointer' style={{ marginRight: '20px' }}>
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<Link href="https://calendly.com/completrix/project-discussion-session?month=2025-04" className="btn btn-gradient d-none d-md-block">
								Book a meeting
							</Link>
							<div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div>
						</div>
					</div>
				</nav>
				<div style={{ marginTop: scroll ? "70px" : "0" }}>
					{/* Add this wrapper or adjust the next sibling element */}
				</div>
				<OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />
				<Search isSearch={isSearch} handleSearch={handleSearch} />
				<MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} />
			</header>

		</>
	)
}
