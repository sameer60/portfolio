import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sameer | Frontend dev",
  description: "This is my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="madara">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
