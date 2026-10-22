/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ExternalLink from "@/components/ui/ExternalLink";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-8 justify-center mt-20 mb-10 mx-6 sm:mx-10 border-t border-base-300/80 pt-10">
      <div className="flex justify-center space-x-6">
        <ExternalLink
          href="https://www.linkedin.com/in/shaiksameerbasha/"
          className="text-neutral-content/80 hover:text-primary transition-colors p-2.5 rounded-xl border border-base-300 hover:border-primary bg-neutral"
        >
          <FaLinkedin className="w-5 h-5" />
        </ExternalLink>
        <ExternalLink
          href="https://twitter.com/sameer_on_x"
          className="text-neutral-content/80 hover:text-primary transition-colors p-2.5 rounded-xl border border-base-300 hover:border-primary bg-neutral"
        >
          <FaSquareXTwitter className="w-5 h-5" />
        </ExternalLink>
      </div>
      <nav className="flex justify-center flex-wrap items-center gap-6 font-medium text-neutral-content">
        <Link
          href="/"
          className="flex title-font font-medium items-center group transition-transform duration-200 hover:scale-105"
        >
          <div className="w-9 h-9 flex items-center justify-center bg-primary text-primary-content rounded-xl border border-primary/40">
            <FaCode className="w-4 h-4" />
          </div>
          <span className="ml-2.5 text-lg font-bold">Sameer</span>
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l sm:border-base-300 sm:py-1 sm:mt-0 mt-4 text-neutral-content/70">
          © 2024 Sameer —
          <ExternalLink
            href="https://t.me/sameer_on_tg"
            className="ml-1 text-primary hover:underline font-semibold"
          >
            @sameer_on_tg
          </ExternalLink>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
