import type React from "react";
import Head from "next/head";
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
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Best App & Website Development Company in India",
    template: "%s - India's Best App Development & Website Development Company",
  },
  description:
    "India’s top app and website development company offering innovative, scalable, and results-driven digital solutions tailored to your business growth..",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "CMT AI | India's Top App Development & Website Development Company.",
    description: "CMT AI is a full-service technology solutions provider...",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="en" data-bs-theme="dark">

      <body className={inter.className}>
        {children}

        {/* Google Analytics */}
        {googleAnalyticsId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel (Facebook Pixel) */}
        {facebookPixelId && (
          <>
            <Script id="facebook-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${facebookPixelId}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}