import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/satoshi/satoshi.css";
import "/public/assets/css/main.css";

import "@/node_modules/react-modal-video/css/modal-video.css";

import Head from 'next/head'; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CMT AI | India's Best App Development & Website Development Company",
    template: "%s - CMT AI | India's Best App Development & Website Development Company"
  },
  description:
    "CMT AI delivers cutting-edge software solutions with a focus on results-driven digital growth. Our expert team combines innovative development approaches with AI technologies to transform business challenges into opportunities. From custom application development to enterprise software integration, we partner with clients to build scalable, future-proof digital products that drive measurable success",
    twitter: {
      card:"summary_large_image"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <Head>
      
        <title>CMT AI | India's Top App Development & Website Development Company.</title>
        <meta
          name="description"
          content="CMT AI is a full-service technology solutions provider specializing in website development, app development, and digital marketing services. Whether you need a dynamic website, a custom mobile app, or powerful SEO strategies to enhance your online visibility, CMT AI has the expertise to deliver tailored solutions. We help businesses of all sizes harness the power of modern technology with user-friendly designs, scalable software, and innovative digital marketing tactics."
        />
        <link rel="canonical" href="https://www.cmtai.in/" />
        
       
        <meta property="og:title" content="CMT AI | India's Top App Development &amp; Website Development Company." />
        <meta
          property="og:description"
          content="CMT AI is a full-service technology solutions provider specializing in website development, app development, and digital marketing services. Whether you need a dynamic website, a custom mobile app, or powerful SEO strategies to enhance your online visibility, CMT AI has the expertise to deliver tailored solutions. We help businesses of all sizes harness the power of modern technology with user-friendly designs, scalable software, and innovative digital marketing tactics."
        />
        <meta property="og:url" content="https://www.cmtai.in/" />
        <meta property="og:site_name" content="CMT AI" />
        <meta property="og:type" content="website" />
        
       
        <meta name="google-site-verification" content="3jj8i8KpCug3qmQK7A-viyNqYEj4lB_qi2e8EQ7V5Ts" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CMT AI | India's Top App Development &amp; Website Development Company."
        />
        <meta
          name="twitter:description"
          content="CMT AI is a full-service technology solutions provider specializing in website development, app development, and digital marketing services. Whether you need a dynamic website, a custom mobile app, or powerful SEO strategies to enhance your online visibility, CMT AI has the expertise to deliver tailored solutions. We help businesses of all sizes harness the power of modern technology with user-friendly designs, scalable software, and innovative digital marketing tactics."
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
