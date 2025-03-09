import "./globals.css";
import Nav from '@/components/Nav'

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Nicolas Bolt - Software Engineer",
  description: "Software engineer with a passion for building products that make a difference.",
  keywords: "software engineer, freelancing, web design",
  openGraph: {
    title: "Nicolas Bolt - Software Engineer",
    description: "Software engineer with a passion for building products that make a difference.",
    type: "website",
    url: "https://www.nicolasbolt.com/",
    images: [
      {
        url: "https://www.nicolasbolt.com/og.svg",
        width: 1200,
        height: 630,
        alt: "Nicolas Bolt Social Image",
      },
    ],
  },
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        
        <Nav />
        {children}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <GoogleAnalytics gaId={process.env.GA_ANALYTICS_ID} />
      </body>
    </html>
  );
}
