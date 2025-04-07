"use client"
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Testimonial4() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

  return (
    <section className="section-testimonial-4 section-padding position-relative overflow-hidden">
      <div className="container position-relative z-1">
        <div className="text-center">
          <div
            className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <img src="/assets/imgs/features-1/dots.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
            <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
          </div>
          <h5 className="ds-3 my-3">+1000 Satisfied Customers</h5>
          <p className="fs-5">🔥 Don't just take our words</p>
        </div>
        <div className="row mt-8 justify-content-center">
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-1.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-2.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-3.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-4.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-5.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-6.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-7.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-8.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-9.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-10.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-11.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
        </div>
        <div className="row justify-content-center d-none d-lg-flex">
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-12.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-13.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-14.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-15.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-16.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-17.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-18.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-19.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-20.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
          <div className="avatar-xxl rounded-circle">
            <img
              className="assessor rounded-circle border border-5 border-primary-soft"
              src="/assets/imgs/testimonial-4/avatar-21.png"
              alt="#Website Development #App Development #Digital Marketing #SEO Services"
            />
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-lg-6 mx-auto text-center">
            <Swiper
              {...swiperOptions}
              className="swiper slider-two pt-2 pb-3"
              modules={[Keyboard, Autoplay, Pagination, Navigation]}
            >
              <div className="swiper-wrapper">
                {/* prettier-ignore */}
                <SwiperSlide className="swiper-slide">
                  <div className="px-lg-6">
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Emily Carter</h6>
                      <div className="flag ms-3">
                        <img src="/assets/imgs/testimonial-1/flag-1.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                        <span className="fs-8">Customer Success Manager, SwiftTech Solutions (USA)</span>
                      </div>
                    </div>
                    <p className="text-900 mt-5">
                    "MY AI BOT has transformed our customer support operations! Our response time has decreased by 70%, and customers appreciate the quick and relevant answers. The AI-powered learning capability ensures it improves over time. It's like having an always-on virtual assistant that never sleeps!"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="px-lg-6">
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Dr. Robert Williams</h6>
                      <div className="flag ms-3">
                        <img src="/assets/imgs/testimonial-1/flag-3.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                        <span className="fs-8">Director, EduFuture Academy (UK)</span>
                      </div>
                    </div>
                    <p className="text-900 mt-5">
                    "CMT SMART LMS is the perfect learning platform for our online courses. The AI-powered student engagement tools and personalized learning recommendations have made a huge difference. Our students are more engaged, and our instructors find it easy to manage. The best LMS we've worked with!"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="px-lg-6">
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Jason Miller</h6>
                      <div className="flag ms-3">
                        <img src="/assets/imgs/testimonial-1/flag-1.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                        <span className="fs-8">CTO, InnovateX Inc. (USA)</span>
                      </div>
                    </div>
                    <p className="text-900 mt-5">
                    "We partnered with CMT AI for a custom enterprise software solution, and they exceeded our expectations. Their team understands complex business requirements and delivers robust, AI-driven solutions. Their ability to integrate AI and automation into our workflows has been a game-changer for our business!"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="px-lg-6">
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Sarah Johnson</h6>
                      <div className="flag ms-3">
                        <img src="/assets/imgs/testimonial-1/flag-3.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                        <span className="fs-8">COO, RetailSync Ltd. (UK)</span>
                      </div>
                    </div>
                    <p className="text-900 mt-5">
                    "CMT AI helped us optimize our eCommerce platform with AI and DevOps automation, improving our site speed, security, and conversion rates. The AI-powered product recommendations increased our sales by 30% within months. Their team’s expertise in cloud and AI solutions is truly impressive!"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="px-lg-6">
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Daniel Foster</h6>
                      <div className="flag ms-3">
                        <img src="/assets/imgs/testimonial-1/flag-1.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                        <span className="fs-8">Managing Director, FinEdge Solutions (USA)</span>
                      </div>
                    </div>
                    <p className="text-900 mt-5">
                    "CMT AI developed our fintech mobile app using Flutter & React Native, and the experience was fantastic. The app is fast, user-friendly, and integrates seamlessly with banking APIs. Their deep understanding of cross-platform development and security sets them apart. Looking forward to more projects together!"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="px-lg-6">
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Mark Thompson</h6>
                      <div className="flag ms-3">
                        <img src="/assets/imgs/testimonial-1/flag-3.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
                        <span className="fs-8">CEO, GrowthSphere Ltd. (UK)</span>
                      </div>
                    </div>
                    <p className="text-900 mt-5">
                    "CMT SMART CRM has revolutionized how we manage our sales pipeline and customer relationships. The AI-driven automation and customizable workflows have significantly improved our efficiency. Plus, having full control over our data on a private cloud is a huge advantage. Highly recommended for businesses looking for a secure and scalable CRM!"
                    </p>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 start-50 translate-middle-x z-0">
        <img src="/assets/imgs/team-1/bg-line.png" alt="#Website Development #App Development #Digital Marketing #SEO Services" />
      </div>
      <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
      <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
    </section>
  )
}

