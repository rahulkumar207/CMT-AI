"use client"
import Isotope from "isotope-layout"
import { useEffect, useRef, useState, useCallback } from "react"

export default function Services5() {
  const isotope = useRef<Isotope | null>(null)
  const [filterKey, setFilterKey] = useState<string>("crm")

  useEffect(() => {
    // Initialize Isotope with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        isotope.current = new Isotope(".masonary-active", {
          itemSelector: ".filter-item",
          percentPosition: true,
          masonry: {
            columnWidth: ".filter-item",
          },
        })

        // Apply the initial filter after initialization
        if (isotope.current) {
          isotope.current.arrange({ filter: `.${filterKey}` })
        }
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [filterKey])

  useEffect(() => {
    if (isotope.current) {
      // Filter items when filterKey changes
      isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
    }
  }, [filterKey])

  const handleFilterKeyChange = useCallback(
    (key: string) => () => {
      setFilterKey(key)
    },
    [],
  )

  const activeBtn = (value: string) =>
    value === filterKey ? "active btn btn-md btn-filter mb-2 me-2" : "btn btn-md btn-filter mb-2 me-2"

  return (
    <>
      {/* Services 5 */}
      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Things we have created at cmt ai</span>
            </div>
            <h3 className="ds-3 my-3">Our Products</h3>
            {/* <p className="fs-5">
              It is a long established fact that a reader will be distracted by <br className="d-none d-lg-block" />
              the readable content of a page when looking at its layout.
            </p> */}
          </div>
          <div className="text-center mt-6">
            <div className="button-group filter-button-group filter-menu-active">
              {/* <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
                All
              </button> */}
               <button className={activeBtn("crm")} onClick={handleFilterKeyChange("crm")}>
               CMT SMART CRM
              </button>
              <button className={activeBtn("aibot")} onClick={handleFilterKeyChange("aibot")}>
                AI CHAT BOT
              </button>

              <button className={activeBtn("lms")} onClick={handleFilterKeyChange("lms")}>
               CMT SMART LMS
              </button>
             
            </div>
          </div>
        </div>
        <div className="container mt-6" >
          <div className="masonary-active" >
            {/* =====================CRM=========================== */}
            {/* Each filter-item now contains a row with image and text side by side */}
            <div className="filter-item w-100 mb-4 crm" style={{ color: "white" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-4 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-6.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">Power Up Your Business with AI-Driven CRM Solutions.</h5>
                    <p className="fs-7 mb-3">CMT SMART CRM is a powerful, AI-powered customer relationship management solution designed for businesses that value data security and customization. With seamless automation, analytics, and integration, it streamlines operations and enhances customer engagement. Deployed on your personal cloud server, it ensures complete data control – because your data should stay yours!</p>
                    <div className="d-flex gap-2 btn-container">
                      <a href="cmtai-crm" className="btn btn-primary">Explore More</a>
                      <a href="https://crm.completrix.com/" className="btn  "> Launch Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================My Ai Bot=========================== */}

            <div className="filter-item w-100 mb-4 aibot">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-4 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-7.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">Automate Conversations, Elevate Customer Experience!</h5>
                    <p className="fs-7 mb-3">MY AI BOT is an intelligent chatbot designed to automate customer interactions, enhance engagement, and improve efficiency. Powered by advanced AI and NLP (Natural Language Processing), it understands queries, provides instant responses, and learns from interactions to offer a human-like experience. Whether for businesses, websites, or customer support, MY AI BOT is your 24/7 AI-powered assistant!</p>
                    <div className="d-flex gap-2 btn-container">
                      <a href="https://example.com" className="btn btn-primary">Explore More</a>
                      <a href="https://myaibot.in/" className="btn btn-secondary">Launch Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* =====================LMS=========================== */}
             <div className="filter-item w-100 mb-4 marketing lms">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-4 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-8.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">AI-Powered LMS for Seamless Training & Skill Development.</h5>
                    <p className="fs-7 mb-3">CMT SMART LMS is an AI-powered Learning Management System built for corporates, educators, and institutions. It offers an intuitive interface for course management, assessments, and progress tracking, ensuring an interactive and engaging learning experience. Personalized learning paths, real-time analytics, and AI-driven recommendations make it the ideal LMS for modern learning needs.</p>
                    <div className="d-flex gap-2 btn-container">
                      <a href="cmtai-lms" className="btn btn-primary">Explore More</a>
                      <a href="https://lms.completrix.com/" className="btn btn-secondary">Launch Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> 

            {/* ===================== ERP =========================== */}
            {/* <div className="filter-item w-100 mb-4 erp">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-4 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-6.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">Responsive Web Design Portfolio</h5>
                    <p className="fs-7 mb-3">Modern UI/UX for Digital Presence</p>
                    <div className="d-flex gap-2 btn-container">
                      <a href="cmtai-erp" className="btn btn-primary">Explore More</a>
                      <a href="cmtai-erp" className="btn btn-secondary">Launch Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

           

            {/* =====================App=========================== */}
            {/* <div className="filter-item w-100 mb-4 app">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-4 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-6.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">Responsive Web Design Portfolio</h5>
                    <p className="fs-7 mb-3">Modern UI/UX for Digital Presence</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary">Explore More</button>
                      <button className="btn btn-secondary">Launch Demo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* =====================Data Analysis=========================== */}
            {/* <div className="filter-item w-100 mb-4 dataanalysis">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-4 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-6.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">Responsive Web Design Portfolio</h5>
                    <p className="fs-7 mb-3">Modern UI/UX for Digital Presence</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary">Explore More</button>
                      <button className="btn btn-secondary">Launch Demo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="assets/imgs/service-2/bg-line.png" alt="infinia" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
    </>
  )
}

