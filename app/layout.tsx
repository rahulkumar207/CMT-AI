import type React from "react"
import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/aos.css"
import "/public/assets/css/vendors/odometer.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "/public/assets/fonts/boxicons/boxicons.min.css"
import "/public/assets/fonts/satoshi/satoshi.css"
import "/public/assets/css/main.css"

import "@/node_modules/react-modal-video/css/modal-video.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "CMT AI | India's Best App Development & Website Development Company",
    template: "%s - CMT AI | India's Best App Development & Website Development Company",
  },
  description:
    "CMT AI delivers cutting-edge software solutions with a focus on results-driven digital growth. Our expert team combines innovative development approaches with AI technologies to transform business challenges into opportunities. From custom application development to enterprise software integration, we partner with clients to build scalable, future-proof digital products that drive measurable success",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "CMT AI | India's Top App Development & Website Development Company.",
    description:
      "CMT AI is a full-service technology solutions provider specializing in website development, app development, and digital marketing services. Whether you need a dynamic website, a custom mobile app, or powerful SEO strategies to enhance your online visibility, CMT AI has the expertise to deliver tailored solutions. We help businesses of all sizes harness the power of modern technology with user-friendly designs, scalable software, and innovative digital marketing tactics.",
    url: "https://www.cmtai.in/",
    siteName: "CMT AI",
    type: "website",
  },
  verification: {
    google: "3jj8i8KpCug3qmQK7A-viyNqYEj4lB_qi2e8EQ7V5Ts",
  },
  alternates: {
    canonical: "https://www.cmtai.in/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        {children}

        {/* Google Analytics */}
       
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GDCMNQC07W"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDCMNQC07W');
          `}
        </Script>

      </body>
    </html>
  )
}

