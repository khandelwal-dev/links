import type { Metadata, Viewport } from "next";

import "$dev/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import Footer from "$dev/components/Footer";

import grid from "./grid.svg";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  themeColor: {
    color: "#000000",
  },
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <html lang="en-US" className={GeistSans.className}>
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="https://khandelwaldev.me/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://khandelwaldev.me/favicon/favicon.svg"
        />
        <link
          rel="shortcut icon"
          href="https://khandelwaldev.me/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://khandelwaldev.me/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Dev" />
        <link
          rel="manifest"
          href="https://khandelwaldev.me/favicon/site.webmanifest"
        />

        <title>Links | Dev Khandelwal</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="Links | Dev Khandelwal" />
        <meta
          name="description"
          content="Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!"
        />
        <meta
          name="keywords"
          content="dev khandelwal, dev khandelwal social media, dev khandelwal links, links"
        />
        <meta name="author" content="Dev Khandelwal" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://links.khandelwaldev.me/" />
        <meta property="og:title" content="Links | Dev Khandelwal" />
        <meta
          property="og:description"
          content="Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!"
        />
        <meta property="og:site_name" content="My Social Links" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://khandelwaldev.me/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kkndev" />
        <meta name="twitter:creator" content="@kkndev" />
        <meta name="twitter:title" content="Links | Dev Khandelwal" />
        <meta
          name="twitter:description"
          content="Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!"
        />
        <meta
          name="twitter:image"
          content="https://khandelwaldev.me/og-image.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://links.khandelwaldev.me/" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dev Khandelwal",
              url: "https://khandelwaldev.me",
              sameAs: [
                "https://github.com/khandelwal-dev",
                "https://linkedin.com/in/devkhandelwal",
                "https://twitter.com/kkndev",
              ],
              jobTitle: "Freelancer",
              worksFor: {
                "@type": "Web Developer",
                name: "Freelancer",
              },
            }),
          }}
        />
      </head>
      <body className="relative bg-[#020202] text-white">
        <div
          className="absolute inset-0 -z-20 size-full"
          style={{
            backgroundImage: `url(${grid.src})`,
          }}
        />
        <div
          className="absolute inset-0 -z-10 size-full"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="relative min-h-screen overflow-x-hidden">
          <main className="relative mx-auto max-w-lg px-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
