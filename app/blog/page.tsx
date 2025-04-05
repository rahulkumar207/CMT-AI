"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

// Define the Blog interface
interface Blog {
  id: string
  blogImage: string
  title: string
  category?: string
  description?: string
}

export default function BlogPage() {
  // State with proper typing
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Fetching blogs...")
        const response = await axios.get("https://cmtai-b.vercel.app/v1/blogs/getBlogs")

        if (!response.data) {
          throw new Error("No data received from API")
        }

        if (response.data.data) {
          console.log("Blogs data:", response.data.data)
          setBlogs(response.data.data)
        } else if (Array.isArray(response.data)) {
          console.log("Blogs data (direct array):", response.data)
          setBlogs(response.data)
        } else {
          console.error("Unexpected data structure:", response.data)
          throw new Error("Unexpected data structure received from API")
        }
      } catch (err) {
        console.error("Error fetching blogs:", err)
        setError(
          err instanceof Error
            ? `Failed to fetch blogs: ${err.message}`
            : "Failed to fetch blogs. Please try again later.",
        )
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <Layout>
      <section className="section-blog-6 section-padding border-bottom">
        <div className="container">
          <div className="row align-items-end">
            <div className="col">
              <h5 className="ds-5 mt-3 mb-3">Trending News</h5>
              <span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
            </div>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div className="row">
              <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading blogs...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="row">
              <div className="col-12 text-center py-5">
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              </div>
            </div>
          )}

          {/* Blog Cards */}
          {!loading && !error && (
            <div className="row">
              {blogs && blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <div key={blog?.id || index} className="col-lg-4 col-md-6 text-start">
                    <div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
                      <Link href={`/blog-details?id=${blog?.id}`}>
                        <img
                          className="rounded-top-3"
                          src={blog?.blogImage || "/assets/imgs/blog-6/default.jpg"}
                          alt={blog?.title || "Blog Image"}
                          onError={(e) => {
                            console.error(`Image failed to load for blog ID: ${blog?.id}, using default image.`)
                            e.currentTarget.src = "/assets/imgs/blog-6/default.jpg"
                          }}
                        />
                      </Link>
                      <div className="card-body bg-white p-0">
                        <Link
                          href={`/blog-details?id=${blog?.id}`}
                          className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3"
                        >
                          <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
                            {blog?.category || "Uncategorized"}
                          </span>
                        </Link>
                        <h6 className="my-3">
                          <Link href={`/blog-details?id=${blog?.id}`}>{blog?.title || "Untitled"}</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p>No blogs found. Please check back later.</p>
                </div>
              )}
            </div>
          )}

          {/* Pagination - Only show if we have blogs
          {!loading && !error && blogs.length > 0 && (
            <div className="row pt-5 text-start">
              <div className="d-flex justify-content-start align-items-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination gap-2">
                    {[1, 2, 3, "..."].map((page, index) => (
                      <li key={index} className="page-item">
                        <Link
                          className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle bg-neutral-100 text-900"
                          href={`/blogs?page=${page}`}
                        >
                          {page}
                        </Link>
                      </li>
                    ))}
                    <li className="page-item">
                      <Link
                        className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle bg-neutral-100 text-900"
                        href="/blogs?page=2"
                        aria-label="Next"
                      >
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )} */}
        </div>
      </section>
    </Layout>
  )
}

