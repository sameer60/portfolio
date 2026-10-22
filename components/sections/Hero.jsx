/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "@/components/ui/Button";

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
        className="container relative mx-auto flex flex-col items-center justify-center px-5 py-24 transition-colors duration-200 ease-linear"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-4xl flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl py-6 text-balance text-neutral-content">
            <span className="block">
              Proficient in <span className="text-[#3371ff]">designing </span>
              and
              <span className="text-[#3371ff]"> high-end </span>
              user interfaces.
            </span>
          </h1>
          <p className="mb-8 leading-tight text-md sm:text-lg md:text-xl lg:text-2xl font-extrabold text-neutral-content max-w-2xl">
            Hi there! I'm <span className="text-info font-bold">Sameer</span>, a
            frontend developer passionate about crafting captivating web
            experiences. I create clean, user-friendly designs and help
            businesses create beloved products for the web.
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              href="#contact"
              variant="primary"
              className="text-md font-medium rounded-lg tracking-wide"
            >
              Get in touch &nbsp; <FaLongArrowAltRight />
            </Button>
            <Button
              href="/Resume.pdf"
              variant="secondary"
              target="_blank"
            >
              resume &nbsp; <MdOutlineFileDownload />
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
