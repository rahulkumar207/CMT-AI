"use client"

import LogoCloud1 from "@/components/sections/LogoCloud1"
import Trusted1 from "@/components/sections/LogoCloud3"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from "react-countup"
import Head from "next/head" // Import Head for dynamic metadata

export default function PageAbout2() {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  }

  return (
    <>
      {/* Add dynamic metadata using Head */}
      <Head>
        <title>About</title>
        <meta name="description" content="Learn more about our company and team." />
      </Head>

      <Layout>
        {/*CTA 13 3*/}
        <section className="section-testimonial-13 position-relative section-padding fix">
          <div className="container position-relative z-1">
            <div className="row pb-9">
              <div className="col-lg-7 mx-lg-auto">
                <div className="text-center mb-lg-0 mb-5">
                  <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                    <img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">About our company</span>
                  </div>
                  <h5 className="ds-5 my-3 fw-regular">We Are India's most Affordable Technology Company....</h5>
                  <p className="fs-5 mb-0 text-500">CMT AI is a leading provider of affordable AI solutions in India. We are committed to democratizing AI by offering cost-effective, high-quality software that empowers businesses of all sizes. Our innovative AI-powered tools and services are designed to streamline operations, enhance decision-making, and drive growth.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="position-relative mb-lg-0 mb-8 fix">
                  <div className="zoom-img rounded-4 fix">
                    <img src="/assets/imgs/cta-13/img-1.png" alt="software development, Software Development Company, custom software development, Software Development Services, software outsourcing, Best Custom Software Development Company, top software development services for startups, Cloud-Based Software Development Solutions, AI-Powered Software Development Services, best software development company for e-commerce, Software Development for Healthcare Industry, software development outsourcing services, Best Software Development Company for Enterprise Solutions, mobile app development services, Web Application Development Company, best AI software development company, Top Blockchain Development Services, best fintech software development solutions, Cloud Migration Services for Software Development, best cybersecurity solutions for software development, Software Development with Agile Methodologies, Best DevOps Services for Software Development" />
                  </div>
                  <div className="position-absolute alltuchtopdown bottom-0 start-0 m-md-5 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
                    <p className="pt-2">Loved by over 4k <br /> happy clients</p>
                    <div className="d-flex align-items-center justify-content-center py-4">
                      <img src="/assets/imgs/features-3/avatar-1.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                      <img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                      <img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="Best Software Development Company, Best Custom Software Development, Best IT Services, Best Software Solutions, Best App Development Services, Best Software Development Company for Startups, Best Custom Software Development Services in 2025, Best Agile Software Development Company, Best Cloud-Based Software Development Solutions, Best AI-Powered Software Development Company, Best Mobile App Development Services for Businesses, Best Web Application Development Company, Best Offshore Software Development Services, Best SaaS Development Company for Enterprises, Best Game Development Software Solutions, Best IT Consulting Firm for Digital Transformation, Best IT Service Management Solutions in 2025, Best IT Consulting Services, Best IT Solutions Provider, Best IT Support Services, Best IT Outsourcing Company for Small Businesses, Best IT Helpdesk Services for Enterprises" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                        <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                        <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                        <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                        <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                        <path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row flex-lg-column">
                  <div className="col-md-6 col-lg-12">
                    <div className="backdrop-filter bg-linear-2 rounded-4 px-6 py-4 z-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="my-lg-3 text-center">
                          <span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={23} enableScrollSpy={true} />k</span>
                          <p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Projects Completed</p>
                          <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={98} enableScrollSpy={true} />k</span>
                          <p className="text-white text-nowrap mb-0">Happy Clients</p>
                        </div>
                        <div className="my-lg-3 text-center">
                          <span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={38} enableScrollSpy={true} />k</span>
                          <p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Users Actived</p>
                          <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /><CountUp end={150} enableScrollSpy={true} /></span>
                          <p className="text-white text-nowrap mb-0">Operating countries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12">
                    <div className="zoom-img rounded-4 fix d-inline-block mt-4 mt-lg-4 mt-md-0 h-100">
                      <img className="h-100" src="/assets/imgs/cta-13/img-2.png" alt="Best Software Development Company, Best Custom Software Development, Best IT Services, Best Software Solutions, Best App Development Services, Best Software Development Company for Startups, Best Custom Software Development Services in 2025, Best Agile Software Development Company, Best Cloud-Based Software Development Solutions, Best AI-Powered Software Development Company, Best Mobile App Development Services for Businesses, Best Web Application Development Company, Best Offshore Software Development Services, Best SaaS Development Company for Enterprises, Best Game Development Software Solutions, Best IT Consulting Firm for Digital Transformation, Best IT Service Management Solutions in 2025, Best IT Consulting Services, Best IT Solutions Provider, Best IT Support Services, Best IT Outsourcing Company for Small Businesses, Best IT Helpdesk Services for Enterprises" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/service-2/bg-line.png" alt="cmtai" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
        </section>
        {/*Logo cloud 3*/}
        <LogoCloud1 />
        {/*Team 6*/}
        <section className="section-team-6 section-padding position-relative">
          <div className="container">
            <div className="row position-relative z-1">
              <div className="text-center">
                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                  <img src="/assets/imgs/features-1/dots.png" alt="cmtai" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
                </div>
                <h3 className="ds-3 my-3">Meet Our Team</h3>
                <p className="fs-5">
                  Meet the talented and passionate team members who drive our <br />
                  company forward every day.
                </p>
              </div>
            </div>
            <div className="row mt-6">
              {/* prettier-ignore */}
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Anurag Singh</Link>
                      </h6>
                      <p className="mb-0"> Founder & CTO</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/1.png" alt="Best Software Developers, Best Programmers, Best Coders, Best Software Engineers, Best IT Professionals, Best Software Development Team in 2025, Best Programmers for Custom Software Development, Best Full-Stack Developers for Enterprise Solutions, Best Mobile App Developers for Businesses, Best Front-End Developers for Web Applications, Best Back-End Developers for Cloud-Based Systems, Best QA Engineers for Software Testing and Quality Assurance, Best DevOps Engineers for Efficient Deployment Processes, Best AI Engineers, Best Data Scientists, Best Embedded Developers, Best Cloud Developers, Best Security Developers, Best AI Engineers for Machine Learning Projects, Best Data Scientists for Predictive Analytics Solutions, Best Embedded Developers for IoT Applications, Best Cloud Developers for AWS and Azure Solutions, Best Security Developers for Cybersecurity Systems, Best Software Architects, Best Project Managers, Best CTOs (Chief Technology Officers), Best Senior Developers, Best Software Architects for Scalable Solutions, Best Project Managers for Agile Development Teams, Best Senior Developers with Expertise in JavaScript and Python, Best CTOs for Tech Strategy and Innovation" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Gourav Kumar</Link>
                      </h6>
                      <p className="mb-0">Chief Marketing Officer (CMO)</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/2.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Dharmendra Kumar</Link>
                      </h6>
                      <p className="mb-0">Co-Founder & COO</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/3.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Hemant kumar</Link>
                      </h6>
                      <p className="mb-0">Software Engineer</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/4.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Nikita Sharma</Link>
                      </h6>
                      <p className="mb-0">Software Engineer</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/5.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Manish Kumar</Link>
                      </h6>
                      <p className="mb-0">Software Engineer</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/6.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Sakshi Rajput</Link>
                      </h6>
                      <p className="mb-0">Software Engineer</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/7.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Prashant Sharma</Link>
                      </h6>
                      <p className="mb-0">Software Engineer</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/8.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Rahul Rajput</Link>
                      </h6>
                      <p className="mb-0">Software Engineer</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/9.png" alt="Best Software Development Team, Best IT Team, Best Development Team Structure, Best Agile Teams, Best Scrum Teams, Best Software Development Team for Custom Projects, Best Agile Software Development Team Structure, Best Scrum Teams for Efficient Product Delivery, Best IT Team for Enterprise Solutions, Best Development Team for Mobile App Projects, Best Software Developers, Best QA Engineers, Best UI/UX Designers, Best DevOps Engineers, Best Product Owners, Best Software Developers for Scalable Applications, Best QA Engineers for Bug-Free Software Delivery, Best UI/UX Designers for User-Friendly Interfaces, Best DevOps Engineers for Continuous Integration and Deployment, Best Product Owners for Agile Development Projects, Best Team Leads, Best Project Managers, Best Software Architects, Best Team Leads for Agile Software Development Teams, Best Project Managers for On-Time Delivery, Best Software Architects for Scalable System Design, Best AI Developers, Best Blockchain Experts, Best Cybersecurity Professionals, Best AI Developers for Machine Learning Projects, Best Blockchain Experts for Fintech Solutions, Best Cybersecurity Professionals for Secure Software Development Best Software Developers, Best Programmers, Best Coders, Best Software Engineers, Best IT Professionals, Best Software Development Team in 2025, Best Programmers for Custom Software Development, Best Full-Stack Developers for Enterprise Solutions, Best Mobile App Developers for Businesses, Best Front-End Developers for Web Applications, Best Back-End Developers for Cloud-Based Systems, Best QA Engineers for Software Testing and Quality Assurance, Best DevOps Engineers for Efficient Deployment Processes, Best AI Engineers, Best Data Scientists, Best Embedded Developers, Best Cloud Developers, Best Security Developers, Best AI Engineers for Machine Learning Projects, Best Data Scientists for Predictive Analytics Solutions, Best Embedded Developers for IoT Applications, Best Cloud Developers for AWS and Azure Solutions, Best Security Developers for Cybersecurity Systems, Best Software Architects, Best Project Managers, Best CTOs (Chief Technology Officers), Best Senior Developers, Best Software Architects for Scalable Solutions, Best Project Managers for Agile Development Teams, Best Senior Developers with Expertise in JavaScript and Python, Best CTOs for Tech Strategy and Innovation" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Nikhil Choudhary</Link>
                      </h6>
                      <p className="mb-0">Software Engineer</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/10.png" alt="Best Software Developers, Best Programmers, Best Coders, Best Software Engineers, Best IT Professionals, Best Software Development Team in 2025, Best Programmers for Custom Software Development, Best Full-Stack Developers for Enterprise Solutions, Best Mobile App Developers for Businesses, Best Front-End Developers for Web Applications, Best Back-End Developers for Cloud-Based Systems, Best QA Engineers for Software Testing and Quality Assurance, Best DevOps Engineers for Efficient Deployment Processes, Best AI Engineers, Best Data Scientists, Best Embedded Developers, Best Cloud Developers, Best Security Developers, Best AI Engineers for Machine Learning Projects, Best Data Scientists for Predictive Analytics Solutions, Best Embedded Developers for IoT Applications, Best Cloud Developers for AWS and Azure Solutions, Best Security Developers for Cybersecurity Systems, Best Software Architects, Best Project Managers, Best CTOs (Chief Technology Officers), Best Senior Developers, Best Software Architects for Scalable Solutions, Best Project Managers for Agile Development Teams, Best Senior Developers with Expertise in JavaScript and Python, Best CTOs for Tech Strategy and Innovation" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Mohit Kumar</Link>
                      </h6>
                      <p className="mb-0">Senior Business Executive</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/11.png" alt="cmtai" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
                <div className="card-team position-relative d-inline-block hover-up">
                  <div className="d-flex bg-primary-soft rounded-top-3 p-3">
                    <div>
                      <h6>
                        <Link href="#" className="text-900">Aayush Kumar</Link>
                      </h6>
                      <p className="mb-0">Senior Business Executive</p>
                    </div>
                    <div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="zoom-img bg-primary-soft">
                    <img className="img-fluid w-100" src="/assets/imgs/team-6/12.png" alt="cmtai" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Features 10*/}
        <section className="features-10 py-9 bg-primary-light">
          <div className="container">
            <div className="row">
              {/* prettier-ignore */}
              <div className="col-lg-3 col-md-6">
                <div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img src="/assets/imgs/features-1/icon-1.svg" alt="cmtai" />
                    </div>
                  </div><h6>
                  Innovation</h6>
                  <p>
Continuously pushing the boundaries of AI technology to deliver cutting-edge solutions.</p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learm More
                    <svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                      <g clipPath="url(#clip0_399_9647)">
                        <path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="position-absolute end-0 top-0">
                    <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img src="/assets/imgs/features-1/icon-2.svg" alt="cmtai" />
                    </div>
                  </div>
                  <h6>Collaboration</h6>
                  <p>Fostering strong partnerships with clients, industry leaders, and the broader AI community.</p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learm More
                    <svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                      <g clipPath="url(#clip0_399_9647)">
                        <path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="position-absolute end-0 top-0">
                    <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img src="/assets/imgs/features-1/icon-3.svg" alt="cmtai" />
                    </div>
                  </div>
                  <h6>Market Expansion</h6>
                  <p>Expanding our reach to new markets and industries, both domestically and internationally.</p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learm More
                    <svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                      <g clipPath="url(#clip0_399_9647)">
                        <path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="position-absolute end-0 top-0">
                    <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div className="icon">
                      <img src="/assets/imgs/features-1/icon-4.svg" alt="cmtai" />
                    </div>
                  </div>
                  <h6>
                  Customer Success</h6>
                  <p>Providing world-class customer support and ensuring customer satisfaction.</p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learm More
                    <svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                      <g clipPath="url(#clip0_399_9647)">
                        <path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="position-absolute end-0 top-0">
                    <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Trusted1 />
      </Layout>
    </>
  )
}