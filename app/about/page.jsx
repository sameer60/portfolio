/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24 mx-auto flex flex-wrap items-center">
        <div className="md:pr-8 lg:pr-16">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-neutral-content">
            Hi! <br />
            I'm an experienced <br />
            <span className="text-blue-500">Frontend Developer</span>
            <br />
            Based in Hyderabad, <br />
            <span className="text-blue-500">Telangana</span>.
          </h1>
          <h3 className="leading-tight mt-4 text-md sm:text-lg md:text-xl lg:text-2xl font-extrabold text-neutral-content">
            I am a Frontend Developer with{" "}
            <span className="text-blue-500">2 years</span> of experience in
            React.js, Next.js, and modern tools like Tailwind CSS. I build
            responsive, <span className="text-blue-500">high-performance</span>{" "}
            applications and <span className="text-blue-500">user-focused</span>{" "}
            designs, driven by clean code and continuous learning.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
