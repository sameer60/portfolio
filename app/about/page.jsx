/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="body-font py-12 sm:py-16">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
        <div className="bg-neutral hypr-card rounded-3xl p-8 sm:p-12 md:p-16 relative">

          <div className="relative z-10 md:pr-8 lg:pr-16">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-neutral-content tracking-tight">
              Hi! <br />
              I'm an experienced <br />
              <span className="text-primary">Frontend Developer</span>
              <br />
              Based in Hyderabad, <br />
              <span className="text-secondary">Telangana</span>.
            </h1>
            <h3 className="leading-relaxed mt-6 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-neutral-content/90 max-w-4xl">
              I am a Frontend Developer with{" "}
              <span className="text-primary">3+ years</span> of experience in
              React.js, Next.js, and modern tools like Tailwind CSS. I build
              responsive, <span className="text-accent">high-performance</span>{" "}
              applications and <span className="text-secondary">user-focused</span>{" "}
              designs, driven by clean code and continuous learning.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
