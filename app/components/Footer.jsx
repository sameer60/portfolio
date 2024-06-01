/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <div className="flex justify-center space-x-5">
        <a
          href="https://www.linkedin.com/in/shaiksameerbasha/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin className="w-8 h-8 text-blue-700" />
        </a>
        <a
          href="https://twitter.com/sameer_on_x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="w-8 h-8" />
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
