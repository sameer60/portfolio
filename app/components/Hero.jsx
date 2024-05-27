import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero body-font relative">
      <div className="area bg-base-100">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div
        className="container relative mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center transition-colors duration-200 ease-linear"
        style={{ zIndex: 2 }}
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl py-6 pr-6 text-balance">
            <span class="block">
              Proficient in{" "}
              <span class="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
                designing{" "}
              </span>
              and
              <span class="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
                {" "}
                high-end{" "}
              </span>
              user interfaces.
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi there! I'm <span className="text-info font-bold">Sameer</span>, a
            frontend developer passionate about crafting captivating web
            experiences. I create clean, user-friendly designs and help
            businesses create beloved products for the web.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="#contact"
              className="btn btn-primary inline-flex border-0 py-2 px-6 focus:outline-none text-lg animate-bounce focus:animate-none hover:animate-none text-md font-medium mt-3 rounded-lg tracking-wide"
            >
              Get in touch &nbsp; <FaLongArrowAltRight />
            </Link>
            <a
              className="btn btn-secondary inline-flex border-0 py-2 px-6 focus:outline-none text-lg"
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              resume &nbsp; <MdOutlineFileDownload />
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/didtdrgsj/image/upload/v1708155190/20240217_125929-removebg-preview_bdylrc.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
