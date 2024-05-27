/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { FaHtml5 } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      name: "HTML",
      color: "green",
    },
    {
      name: "CSS",
      color: "pink",
    },
    {
      name: "Javascript",
      color: "yellow",
    },
    {
      name: "Tailwind",
      color: "purple",
    },
    {
      name: "ReactJS",
      color: "sky",
    },
    {
      name: "NextJS",
      color: "gray",
    },
    {
      name: "Git",
      color: "orange",
    },
    {
      name: "Material UI",
      color: "blue",
    },
  ];
  return (
    <div className="bg-base-100">
      <div className="container mx-auto pt-8 pb-20">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-12 xl:col-span-3">
            <div className="bg-neutral shadow rounded-lg p-6">
              <div className="py-8 px-8 max-w-md mx-auto bg-base-100 rounded-xl shadow-lg sm:py-4 flex flex-col sm:flex-row gap-4 items-center">
                <img
                  className="block mx-auto h-16 rounded-full border border-neutral sm:mx-0 sm:shrink-0"
                  src="https://res.cloudinary.com/didtdrgsj/image/upload/v1708155190/20240217_125929-removebg-preview_bdylrc.png"
                  alt="Woman's Face"
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg font-semibold">Sameer</p>
                    <p className="font-medium">Frontend developer</p>
                  </div>
                  <Link
                    href="/#contact"
                    className="px-4 py-1 mt-4 inline-block text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                  >
                    Message
                  </Link>
                </div>
              </div>

              <hr className="my-6 border-t border-gray-300" />
              <div className="container mx-auto p-2">
                <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    <p className="bg-green-200 hover:bg-green-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      HTML
                    </p>
                    <p className="bg-pink-200 hover:bg-pink-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      CSS
                    </p>
                    <p className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      Javascript
                    </p>
                    <p className="bg-sky-200 hover:bg-sky-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      ReactJS
                    </p>
                    <p className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      NextJS
                    </p>
                    <p className="bg-teal-200 hover:bg-teal-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      Tailwind CSS
                    </p>
                    <p className="bg-orange-200 hover:bg-orange-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      Git
                    </p>
                    <p className="bg-purple-200 hover:bg-purple-300 text-gray-800 py-1 px-2 rounded-lg text-sm font-semibold">
                      Bootstrap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-9">
            <div className="bg-neutral shadow rounded-lg p-6">
              <h2 className="text-2xl font-extrabold mb-4">About Me</h2>
              <p className="">
                With <b>2 years</b> of experience as a Junior Software Engineer
                at MetricStream, I am a dynamic Frontend Developer skilled in
                HTML, CSS, JavaScript, React, and Next.js. I am passionate about
                staying updated with industry trends and delivering
                high-quality, scalable web applications that exceed client
                expectations. If you're looking for a dedicated and innovative
                developer, look no further.
              </p>

              <h2 className="text-2xl font-extrabold mt-6 mb-4">Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="font-bold">
                    Frontend Developer - MetricStream
                  </span>
                  <p>
                    <span className="">Sept 2022 - Present</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="font-bold">Intern - NxtWave</span>
                  <p>
                    <span className="">Mar 2022 - Sep 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
