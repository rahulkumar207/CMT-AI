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
                CRM
              </button>
              <button className={activeBtn("aibot")} onClick={handleFilterKeyChange("aibot")}>
                MY AIBot
              </button>
              <button className={activeBtn("erp")} onClick={handleFilterKeyChange("erp")}>
                ERP
              </button>
             
              <button className={activeBtn("lms")} onClick={handleFilterKeyChange("lms")}>
                LMS
              </button>
              <button className={activeBtn("app")} onClick={handleFilterKeyChange("app")}>
                APP
              </button>
              <button className={activeBtn("dataanalysis")} onClick={handleFilterKeyChange("dataanalysis")}>
                Data Analysis
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
                  <div className="project-item zoom-img rounded-2 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-6.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">Financial analysis software 4.0 for JiCo JSC</h5>
                    <p className="fs-7 mb-3">Achieve Your a of Business</p>
                    <div className="d-flex gap-2 btn-container">
                      <a href="cmtai-crm" className="btn btn-primary">Get THIS</a>
                      <a href="cmtai-crm" className="btn btn-secondary">Free Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================My Ai Bot=========================== */}

            <div className="filter-item w-100 mb-4 aibot">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-2 fix position-relative h-100">
                    <img
                      className="rounded-2 w-100 h-100 object-fit-cover"
                      src="assets/imgs/project-1/img-6.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-item rounded-2 fix position-relative p-4 h-100 bg-light">
                    <h5 className="text-700">AI-Powered Chatbot Solution</h5>
                    <p className="fs-7 mb-3">Intelligent Automation for Customer Support</p>
                    <div className="d-flex gap-2 btn-container">
                      <a href="https://example.com" className="btn btn-primary">Get THIS</a>
                      <a href="https://example.com/demo" className="btn btn-secondary">Free Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================== ERP =========================== */}
            <div className="filter-item w-100 mb-4 erp">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-2 fix position-relative h-100">
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
                      <a href="cmtai-erp" className="btn btn-primary">Get THIS</a>
                      <a href="cmtai-erp" className="btn btn-secondary">Free Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================LMS=========================== */}
            <div className="filter-item w-100 mb-4 marketing lms">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-2 fix position-relative h-100">
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
                      <a href="cmtai-lms" className="btn btn-primary">Get THIS</a>
                      <a href="cmtai-lms" className="btn btn-secondary">Free Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================App=========================== */}
            <div className="filter-item w-100 mb-4 app">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-2 fix position-relative h-100">
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
                      <button className="btn btn-primary">View</button>
                      <button className="btn btn-secondary">Contact</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================Data Analysis=========================== */}
            <div className="filter-item w-100 mb-4 dataanalysis">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="project-item zoom-img rounded-2 fix position-relative h-100">
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
                      <button className="btn btn-primary">View</button>
                      <button className="btn btn-secondary">Contact</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

