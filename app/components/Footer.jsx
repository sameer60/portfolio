import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <div className="flex justify-center space-x-5">
        <a
          href="https://www.linkedin.com/in/shaiksameerbasha/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a
          href="https://twitter.com/sameer_on_x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
      </div>
      <nav className="flex justify-center flex-wrap gap-6 font-medium">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <FaCode className="w-10 h-10 text-white p-2 bg-secondary rounded-full" />
          <span className="ml-3 text-xl">Sameer</span>
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Sameer —
          <Link
            href="https://t.me/sameer_on_tg"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @sameer_on_tg
          </Link>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
