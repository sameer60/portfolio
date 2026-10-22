import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sameer | Frontend dev",
  description: "This is my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="catppuccin-mocha" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved) {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'catppuccin-mocha');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
