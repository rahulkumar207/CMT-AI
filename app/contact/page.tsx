"use client"

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { db } from "@/util/firebase" // Import centralized Firebase configuration
import { collection, addDoc } from "firebase/firestore"
import ContactSection from "@/components/sections/contact-info"

export default function PageContact3() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const phoneRegex = /^[6-9]\d{9}$/ // Validates Indian mobile numbers starting with 6-9 and 10 digits
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Validates standard email format

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" })) // Clear error on change
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone" && !phoneRegex.test(value)) {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number. Please enter a valid 10-digit mobile number." }))
    }

    if (name === "email" && !emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address. Please enter a valid email." }))
    }

    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required." }))
    }
  }

  const validateForm = () => {
    const newErrors: typeof errors = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    }

    if (!formData.name.trim()) newErrors.name = "Name is required."
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number. Please enter a valid 10-digit mobile number."
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address. Please enter a valid email."
    if (!formData.subject.trim()) newErrors.subject = "Subject is required."
    if (!formData.message.trim()) newErrors.message = "Message is required."

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      await addDoc(collection(db, "cmtaiLeads"), formData)
      setSuccess(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      console.error("Error saving form data:", err)
      setError("Failed to submit the form. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <section className="section-contact-2 position-relative section-padding bg-5">
        <div className="container position-relative z-1">
          <div className="text-center">
            <h5 className="ds-5 mt-3 mb-3">
              Thinking about a project? <br className="d-md-block d-none" />
              Get in touch with us.
            </h5>
            <span className="fs-5 fw-medium">
              Connect with Us Today through the Details Below or Fill <br className="d-md-block d-none" />
              Out the Form for a Prompt Response
            </span>
          </div>
          <div className="row mt-8">
            <div className="col-lg-10 mx-lg-auto">
              <div className="row">
                <div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
                  <h4>Leave a message</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center">
                          <input
                            type="text"
                            className={`form-control ms-0 border rounded-2 ${errors.name ? "is-invalid" : ""}`}
                            name="name"
                            placeholder="Your name *"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center mt-4 mt-md-0">
                          <input
                            type="text"
                            className={`form-control ms-0 border rounded-2 ${errors.phone ? "is-invalid" : ""}`}
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center mt-4">
                          <input
                            type="email"
                            className={`form-control ms-0 border rounded-2 ${errors.email ? "is-invalid" : ""}`}
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center mt-4">
                          <input
                            type="text"
                            className={`form-control ms-0 border rounded-2 ${errors.subject ? "is-invalid" : ""}`}
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group rounded-1 d-flex mt-4">
                          <textarea
                            className={`form-control border ms-0 rounded-2 ${errors.message ? "is-invalid" : ""}`}
                            name="message"
                            placeholder="Describe Your Project in Short"
                            value={formData.message}
                            rows={3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary hover-up mt-4" disabled={loading}>
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                  </form>
                  {success && <p className="text-success mt-3">Message sent successfully!</p>}
                  {error && <p className="text-danger mt-3">{error}</p>}
                </div>
                <div className="col-lg-6">
                  <div className="ps-lg-6">
                    <h6>Chat with us</h6>
                    <p className="text-500">The support team is always available 24/7</p>
                    <div className="d-flex mb-2">
                      <img src="/assets/imgs/contact-2/icon-1.svg" alt="cmtai" />
                      <Link
                        className="ms-2 text-decoration-underline text-900 fs-7"
                        href="https://wa.me/919818234884" // Example: India number
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat via Whatsapp
                      </Link>
                    </div>

                    <h6>Send us an email</h6>
                    <p className="text-500">Our team will respond promptly to your inquiries</p>
                    <div className="d-flex mb-2">
                      <img src="/assets/imgs/contact-2/icon-4.svg" alt="cmtai" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                        info@cmtai.in
                      </Link>
                    </div>
                    <h6>For more inquiry</h6>
                    <p className="text-500">Reach out for immediate assistance</p>
                    <div className="d-flex mb-2">
                      <img src="/assets/imgs/contact-2/icon-5.svg" alt="cmtai" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                        +91 9818234884
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-contact-5 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/imgs/contact-5/icon-1.svg" alt="cmtai" />
                  </div>
                </div>
                <h6>Help support</h6>
                <p className="text-500">
                  Email <span className="text-900">info@cmtai.in</span> For <br />
                  help with a current product or <br />
                  service or refer to FAQs and developer tools
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/imgs/contact-5/icon-2.svg" alt="cmtai" />
                  </div>
                </div>
                <h6>Call Us</h6>
                <p className="text-500">
                  Call us to speak to a member of our team. <br />
                  +91 9818234884 <br />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/imgs/contact-5/icon-3.svg" alt="cmtai" />
                  </div>
                </div>
                <h6>Business Department</h6>
                <p className="text-500">
                  Contact the sales department about cooperation projects <br />
                  +91 9818234884
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/imgs/contact-5/icon-4.svg" alt="cmtai" />
                  </div>
                </div>
                <h6>Global branch</h6>
                <p className="text-500">
                  Contact us to open our branches globally. <br />
                  +91 9818234884 <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

<ContactSection />

      {/* <div className="container pb-120">
        <div className="contact-map w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14014.401174993189!2d77.318452!3d28.581763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53708916071%3A0x432816975a2fe899!2sCMT%20AI!5e0!3m2!1sen!2sin!4v1743657914449!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div> */}
    </Layout>
  )
}