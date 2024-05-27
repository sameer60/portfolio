import React from "react";
import { ImMobile2 } from "react-icons/im";
import { BsStars } from "react-icons/bs";
import { IoPlanet } from "react-icons/io5";

const Features = () => {
  return (
    <>
      <section className="body-font relative z-10">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col text-center mt-40 w-full mb-20">
            <h2 className="mb-5 text-4xl font-bold md:text-center md:text-5xl">
              A frontend 😄 developer with a{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                design sense.
              </span>
            </h2>
            <h1 className="sm:text-lg text-md font-medium title-font text-default">
              Building websites that look good is the first step, but it's also
              important to make sure your website's code is easy to read and
              maintain.
            </h1>
          </div>
          <div className="w-full bg-base-100 pt-16 mb-40 p-4">
            <div className="grid gap-14 md:grid-cols-3 md:gap-5">
              <div className="rounded-xl bg-neutral p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                  <ImMobile2 className="h-8 w-8 text-white" />
                </div>
                <h1 className="mb-3 text-xl font-medium lg:px-14">
                  Responsive Design
                </h1>
                <p className="px-4">
                  The world has gone mobile - so why not your website? I
                  specialize in responsive web design so you never have to worry
                  about your content being seen by customers or users no matter
                  what device they're on.
                </p>
              </div>
              <div
                data-aos-delay="150"
                className="rounded-xl bg-neutral p-6 text-center shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                  <BsStars className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
                  Clean Code
                </h1>
                <p className="px-4">
                  I keep myself up-to-date on the newest tools and technologies
                  like ReactJS, NextJS or Tailwind CSS (just to name a few). I
                  Choose best tools for the task at hand to implement them in
                  the most effective way.
                </p>
              </div>
              <div
                data-aos-delay="150"
                className="rounded-xl bg-neutral p-6 text-center shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                  <IoPlanet className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
                  Cutting Edge
                </h1>
                <p className="px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  iure inventore amet modi accusantium vero perspiciatis,
                  incidunt dicta sed aspernatur!
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute top-96 left-40 -z-10">
          <svg
            width="43"
            height="56"
            viewBox="0 0 43 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="40.9984"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 40.9984 1.49626)"
                fill="grey"
              ></circle>
              <circle
                cx="27.8304"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 27.8304 1.49626)"
                fill="grey"
              ></circle>
              <circle
                cx="14.6644"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 14.6644 1.49626)"
                fill="grey"
              ></circle>
              <circle
                cx="1.49642"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 1.49642 1.49626)"
                fill="grey"
              ></circle>
              <circle
                cx="40.9984"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 40.9984 14.6642)"
                fill="grey"
              ></circle>
              <circle
                cx="27.8304"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 27.8304 14.6642)"
                fill="grey"
              ></circle>
              <circle
                cx="14.6644"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 14.6644 14.6642)"
                fill="grey"
              ></circle>
              <circle
                cx="1.49642"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 1.49642 14.6642)"
                fill="grey"
              ></circle>
              <circle
                cx="40.9984"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 40.9984 27.8302)"
                fill="grey"
              ></circle>
              <circle
                cx="27.8304"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 27.8304 27.8302)"
                fill="grey"
              ></circle>
              <circle
                cx="14.6644"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 14.6644 27.8302)"
                fill="grey"
              ></circle>
              <circle
                cx="1.49642"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 1.49642 27.8302)"
                fill="grey"
              ></circle>
              <circle
                cx="40.9984"
                cy="40.9982"
                r="1.49626"
                transform="rotate(90 40.9984 40.9982)"
                fill="grey"
              ></circle>
              <circle
                cx="27.8304"
                cy="40.9963"
                r="1.49626"
                transform="rotate(90 27.8304 40.9963)"
                fill="grey"
              ></circle>
              <circle
                cx="14.6644"
                cy="40.9982"
                r="1.49626"
                transform="rotate(90 14.6644 40.9982)"
                fill="grey"
              ></circle>
              <circle
                cx="1.49642"
                cy="40.9963"
                r="1.49626"
                transform="rotate(90 1.49642 40.9963)"
                fill="grey"
              ></circle>
              <circle
                cx="40.9984"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 40.9984 54.1642)"
                fill="grey"
              ></circle>
              <circle
                cx="27.8304"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 27.8304 54.1642)"
                fill="grey"
              ></circle>
              <circle
                cx="14.6644"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 14.6644 54.1642)"
                fill="grey"
              ></circle>
              <circle
                cx="1.49642"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 1.49642 54.1642)"
                fill="grey"
              ></circle>
            </g>
          </svg>
        </span>
        <span className="absolute -bottom-20 right-0 -z-10">
          <svg
            width="388"
            height="250"
            viewBox="0 0 388 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6910)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6910"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute -bottom-20 right-0 -z-10">
          <svg
            width="324"
            height="250"
            viewBox="0 0 324 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6911)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6911"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stop-color="white"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </section>
    </>
  );
};

export default Features;
