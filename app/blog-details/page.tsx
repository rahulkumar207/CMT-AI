// "use client"

// import Layout from "@/components/layout/Layout"
// import Link from "next/link"
// import { useRouter } from "next/router"
// import { useEffect, useState } from "react"
// import axios from "axios"

// // Define the Blog interface
// interface Blog {
//   id: string
//   blogImage: string
//   title: string
//   category?: string
//   description?: string
//   content?: string
//   createdAt?: string
// }

// export default function PageBlogDetails() {
//   const router = useRouter()
//   const [blog, setBlog] = useState<Blog | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     // Ensure the router is ready before accessing query parameters
//     if (!router.isReady) return

//     const { id } = router.query

//     if (!id) {
//       setError("No blog ID provided")
//       setLoading(false)
//       return
//     }

//     const fetchBlog = async () => {
//       try {
//         console.log(`Fetching blog with ID: ${id}`)
//         const response = await axios.get(`https://cmtai-b.vercel.app/v1/blogs/getBlogById?id=${id}`)

//         if (!response.data || !response.data.data) {
//           throw new Error("No blog found with the provided ID")
//         }

//         const blogData = response.data.data

//         // Ensure the data matches the Blog interface and provide defaults for missing fields
//         const blog: Blog = {
//           id: blogData.id,
//           blogImage: blogData.blogImage || "/assets/imgs/blog-details/default.jpg",
//           title: blogData.title || "Untitled Blog Post",
//           category: blogData.category || "Uncategorized",
//           description: blogData.description || "",
//           content: blogData.content || "",
//           createdAt: blogData.createdAt || "",
//         }

//         console.log("Blog data:", blog)
//         setBlog(blog)
//       } catch (err) {
//         console.error("Error fetching blog:", err)
//         setError(
//           err instanceof Error
//             ? `Failed to fetch blog: ${err.message}`
//             : "Failed to fetch blog. Please try again later.",
//         )
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchBlog()
//   }, [router.isReady, router.query])

//   const handleClick = () => {
//     console.log("Button clicked!")
//   }

//   // Loading state
//   if (loading) {
//     return (
//       <Layout>
//         <section>
//           <div className="container mt-5">
//             <div className="row">
//               <div className="col-12 text-center py-5">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-2">Loading blog details...</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     )
//   }

//   // Error state
//   if (error) {
//     return (
//       <Layout>
//         <section>
//           <div className="container mt-5">
//             <div className="row">
//               <div className="col-12 text-center py-5">
//                 <div className="alert alert-danger" role="alert">
//                   {error}
//                 </div>
//                 <Link href="/blogs">
//                   <a>Back to Blogs</a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     )
//   }

//   // No blog found
//   if (!blog) {
//     return (
//       <Layout>
//         <section>
//           <div className="container mt-5">
//             <div className="row">
//               <div className="col-12 text-center py-5">
//                 <p>No blog found.</p>
//                 <Link href="/blogs">
//                   <a>Back to Blogs</a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     )
//   }

//   return (
//     <Layout>
//       <section>
//         <div className="container mt-5">
//           <div className="row">
//             <div className="col-md-8 mx-auto">
//               <div className="d-flex gap-2">
//                 <Link
//                   href="#"
//                   className="bg-primary-soft rounded-pill px-3 fw-bold py-2 text-primary text-uppercase fs-7"
//                 >
//                   {blog.category || "Uncategorized"}
//                 </Link>
//               </div>
//               <h5 className="ds-5 mt-3 mb-4">{blog.title || "Untitled Blog Post"}</h5>

//               {/* Show creation date if available */}
//               {blog.createdAt && (
//                 <p className="fs-6 text-muted mb-3">Published on: {new Date(blog.createdAt).toLocaleDateString()}</p>
//               )}

//               {/* Show description or content */}
//               <p className="fs-5 text-900 mb-0">{blog.description || blog.content || "No content available."}</p>
//             </div>

//             <div className="col-md-10 mx-auto my-7">
//               <img
//                 className="rounded-4 w-100"
//                 src={blog.blogImage || "/assets/imgs/blog-details/default.jpg"}
//                 alt={blog.title || "Blog Image"}
//                 onError={(e) => {
//                   e.currentTarget.src = "/assets/imgs/blog-details/default.jpg"
//                 }}
//               />
//             </div>

//             {/* If there's HTML content, render it */}
//             {blog.content && blog.description && (
//               <div className="col-md-8 mx-auto">
//                 <div className="fs-5 text-900 mt-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
//               </div>
//             )}

//             {/* Back to Blogs button */}
//             <div className="col-md-8 mx-auto mt-5 mb-5">
//               <Link href="/blogs">
//                 <a>Back to Blogs</a>
//               </Link>
//             </div>

//             {/* New button */}
//             <div className="col-md-8 mx-auto mt-5 mb-5">
//               <button onClick={handleClick}>Click Me</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   )
// }

