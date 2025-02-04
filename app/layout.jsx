import "./globals.css";
import Nav from '@/components/Nav'

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Nicolas Bolt",
  description: "Nicolas Bolt - Software Engineer",
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
