import React from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import ThemeDropdown from "./ThemeDropdown";

const Navbar = () => {
  return (
    <header className="body-font sticky top-0 z-40">
      <div
        className="bg-neutral/90 backdrop-blur-md hypr-nav
        my-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 rounded-3xl flex flex-wrap py-4 md:py-5 px-5 sm:px-8 md:px-12 flex-col md:flex-row items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="flex title-font font-medium items-center group transition-transform duration-200 hover:scale-105"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-primary text-primary-content rounded-2xl border border-primary/40 group-hover:rotate-6 transition-transform">
            <FaCode className="w-5 h-5" />
          </div>
          <span className="ml-3 text-xl font-bold tracking-tight text-neutral-content">
            Sameer
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-base justify-center">
          <Link
            href="/uses"
            className="font-semibold text-md sm:text-lg cursor-pointer group transition duration-300 text-neutral-content hover:text-primary"
          >
            /uses
            <div className="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full"></div>
          </Link>
          <Link
            href="/about"
            className="font-semibold text-md sm:text-lg cursor-pointer group transition duration-300 text-neutral-content hover:text-primary"
          >
            /about
            <div className="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full"></div>
          </Link>

          {/*Theme Selector Dropdown */}
          <ThemeDropdown />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
