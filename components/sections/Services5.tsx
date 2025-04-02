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
              <img src="assets/imgs/features-1/dots.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
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
                      alt="Best CRM for Small Business, Cloud-Based CRM Solutions, AI-Powered CRM Software, CRM for Customer Service, Best CRM for Sales Teams, CRM with Marketing Automation, CRM for E-commerce Businesses, CRM with AI-Driven Insights, Best CRM for Enterprise, CRM for Lead Management, CRM with Integration Capabilities, Best CRM for Personalized Customer Experiences, Best CRM for Small Businesses in 2025, Best Cloud-Based CRM Software, Best AI-Powered CRM Solutions, Best CRM for Sales and Marketing Integration, Best CRM for E-commerce Businesses, Best CRM for Customer Support Teams, Best Affordable CRM Software for Startups, Best CRM with Predictive Analytics Features, Best Mobile-Friendly CRM Platforms, Best Enterprise-Level CRM Software, Best CRM with Marketing Automation Tools, Best CRM with AI Chatbot Integration, Best CRM for Lead Management and Tracking, Best CRM for Personalized Customer Experiences, Best CRM with Omnichannel Communication Features, Best Low-Code CRM Platforms for Developers, Best CRM for Real-Time Data Analytics and Reporting, CRM with Chatbot Integration, CRM for IoT-Enabled Businesses, CRM with Predictive Analytics, CRM for Mobile Devices, CRM with Low-Code Development, CRM for Customer Journey Mapping cmt ai crm, cmt ai noida, crm software development, ai crm solutions, ai-powered crm, customer relationship management, crm automation, ai software development, mobile app development noida, android app development, ios app development, custom crm solutions, cloud-based crm solutions, cloud technology solutions, digital marketing services, seo services for crm, smo services for crm, crm integration, web application development, ai web development, crm software integration, enterprise crm solutions, ai-driven customer support, crm platform development, ai software architecture, software development lifecycle, software engineering services, ui/ux design for crm, backend development for crm, frontend development for crm, full-stack development for crm, open-source crm development, rapid application development, prototype development for crm, api development for crm, software testing for crm, crm software maintenance, enterprise ai solutions, ai cloud solutions, data-driven crm, business intelligence for crm, crm data analytics, ai chatbot development for crm, crm data management, software deployment for crm, crm mobile solutions, ai customer insights, crm system development, custom software solutions, cloud crm solutions"
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
                      alt="AI-Powered Chatbot Development, Conversational AI for Customer Service, Chatbot Integration Services, AI Chatbot for Ecommerce, Advanced NLP Chatbots, Generative AI in Chatbots, AI Chatbot for Software Development, Hyper-Personalized Chatbot Solutions, AI Voice Assistants, AI Chatbot Trends 2025, Conversational AI, Chatbot Development, AI Chatbot Solutions,best ai bot, best cmt ai bot, best ai chatbot development, best ai-powered bot solutions, best conversational ai bot, best chatbot software development, best ai-driven chatbot, best chatbot integration, best custom ai bot development, best enterprise ai bot, best ai bot for customer service, best chatbots for websites, best chatbot development services, best ai-based customer support bot, best ai conversational agents, best chatbot solutions for businesses, best cmt ai chatbot, best ai bot for crm, best ai virtual assistant, best natural language processing bot, best machine learning chatbots, best automated customer service bot, best custom chatbot for business, best cloud-based ai bots, best chatbot ui/ux design, best ai chatbot platform, best bot for lead generation, best customer engagement chatbot, best automated chatbot solutions, best intelligent ai bot, best cmt ai software, best chatbot deployment, best ai bot testing, best chatbot integration services, best enterprise chatbot solutions, best ai bot for mobile apps, best personalized ai bot, best chatbot development for enterprises, best cmt ai bot for websites, best business chatbot solutions, best ai-driven virtual assistant, best ai automation bot, best ai chatbots for marketing, best chatbots for ecommerce"
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
                      alt="Best LMS Software, Best Learning Management System, Top LMS Platforms, Best Online Learning Software, Corporate LMS Solutions, Best LMS for Corporate Training Programs, Best LMS for Employee Onboarding and Development, Best LMS for Small Businesses in 2025, Best Cloud-Based Learning Management Systems, Best LMS with Gamification Features, Best Mobile-Friendly LMS Platforms, Best LMS for Higher Education Institutions, Affordable and Best LMS Solutions for Startups, Best AI Chatbot Integrated with LMS Platforms, Best AI-Powered LMS with Personalized Learning Features, Top LMS with Built-in AI Chatbot Support, Best AI Chatbot for Enhancing Online Training via LMS, Best AI Tools for Learning Management Systems, LMS Software, Learning Management System, Best LMS for Corporate Training, LMS for Online Courses, Cloud-Based Learning Management System, LMS for Higher Education, LMS for Small Business, AI-Powered LMS Solutions, Mobile LMS Platforms, LMS for Employee Training, Online Learning Platforms, E-Learning Solutions, Corporate LMS cmt ai lms, ai-powered lms, learning management system, ai-based lms solutions, cloud-based lms, custom lms development, ai-driven e-learning, cmt ai learning management system, enterprise lms solutions, lms software development, lms integration, ai-driven learning platforms, adaptive learning management system, personalized learning with ai, ai for education, lms platform development, e-learning solutions, ai-enhanced lms, learning management system integration, cloud-based learning management system, ai for corporate training, lms software for businesses, ai lms for education, digital learning platforms, lms for employee training, gamified lms solutions, mobile-friendly lms, ai in online learning, lms for remote learning, scalable learning management system, ai-driven course management, lms deployment, ai-powered education tools, content management for lms, cmt ai e-learning, lms development services, adaptive learning tools, lms data analytics, smart learning solutions, online course development with ai, ai-enabled education systems, lms testing and maintenance, virtual learning environments, ai-powered skill development"
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

           
          </div>
        </div>

        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="assets/imgs/service-2/bg-line.png" alt="CMT AI | CMT AI NOIDA | We Create Android App | IOS App | Website | Cloud Technology | Digital Marketing , SEO , SMO. Web application development, Mobile app development, Software engineering, Software solutions provider, Software development lifecycle, Software architecture, Software coding, Software testing, Software deployment, Software maintenance, Front-end development, Back-end development, Full-stack development, Cloud-based software development, Enterprise software development, Open-source software development, Rapid application development, Prototype development, Application programming interface (API) development, Software integration, Database development, UI/UX design and development, Software,completrix,completrix microtechnologies pvt ltds" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
    </>
  )
}

