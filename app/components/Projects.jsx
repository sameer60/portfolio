/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="w-full flex justify-center">
          <h1 className="mb-5 text-4xl font-bold md:text-center md:text-5xl">
            Have a glance at a few of my{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              projects.
            </span>
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          <Link
            href="https://sameer-job-app.vercel.app/"
            target="_blank"
            className="max-w-2xl mx-auto mt-8 hover:-translate-y-1 transition cursor-pointer"
          >
            <div className="w-full h-11 rounded-t-lg bg-neutral flex justify-start items-center space-x-1.5 px-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <div className="flex items-center ml-28 w-72 overflow-hidden">
                <span className="bg-base-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 truncate">
                  https://sameer-jobby-app.vercel.app
                </span>
              </div>
            </div>
            <div className="bg-gray-100 border-t-0 w-full rounded-md">
              <img
                className="w-full aspect-video rounded-b-md"
                src="https://res.cloudinary.com/didtdrgsj/image/upload/v1711731529/Screenshot_from_2024-03-29_22-25-13_krjtot.png"
                alt="blog"
              />
            </div>
          </Link>
          <Link
            href="https://softech-gamma.vercel.app/"
            target="_blank"
            className="max-w-2xl mx-auto mt-8 hover:-translate-y-1 transition cursor-pointer"
          >
            <div className="w-full h-11 rounded-t-lg bg-neutral flex justify-start items-center space-x-1.5 px-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <div className="flex items-center ml-28 w-72 overflow-hidden">
                <span className="bg-base-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 truncate">
                  https://softech-gamma.vercel.app
                </span>
              </div>
            </div>
            <div className="bg-gray-100 border-t-0 w-full rounded-md">
              <img
                className="w-full aspect-video rounded-b-md"
                src="/softech.png"
                alt="softech"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
