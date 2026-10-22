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
            <span className="text-primary">projects</span>.
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap gap-8 justify-center mt-6">
          <Link
            href="https://play.watchvertical.co/"
            target="_blank"
            className="w-full max-w-2xl rounded-2xl overflow-hidden bg-neutral hypr-card group hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-full h-11 bg-neutral/90 border-b border-base-300 flex justify-between items-center px-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-error/80 border border-error"></span>
                <span className="w-3 h-3 rounded-full bg-warning/80 border border-warning"></span>
                <span className="w-3 h-3 rounded-full bg-success/80 border border-success"></span>
              </div>
              <div className="flex items-center max-w-xs overflow-hidden">
                <span className="bg-base-100/80 border border-base-300/80 rounded-lg px-3 py-1 text-xs font-mono text-neutral-content/80 truncate">
                  https://play.watchvertical.co
                </span>
              </div>
              <div className="w-12"></div>
            </div>
            <div className="bg-base-200/40 w-full overflow-hidden">
              <img
                className="w-full aspect-video object-cover group-hover:scale-102 transition-transform duration-500"
                src="/vertical-tv.png"
                alt="Vertical TV"
              />
            </div>
          </Link>
          <Link
            href="https://studio.evertutor.ai"
            target="_blank"
            className="w-full max-w-2xl rounded-2xl overflow-hidden bg-neutral hypr-card group hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-full h-11 bg-neutral/90 border-b border-base-300 flex justify-between items-center px-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-error/80 border border-error"></span>
                <span className="w-3 h-3 rounded-full bg-warning/80 border border-warning"></span>
                <span className="w-3 h-3 rounded-full bg-success/80 border border-success"></span>
              </div>
              <div className="flex items-center max-w-xs overflow-hidden">
                <span className="bg-base-100/80 border border-base-300/80 rounded-lg px-3 py-1 text-xs font-mono text-neutral-content/80 truncate">
                  https://studio.evertutor.ai
                </span>
              </div>
              <div className="w-12"></div>
            </div>
            <div className="bg-base-200/40 w-full overflow-hidden">
              <img
                className="w-full aspect-video object-cover group-hover:scale-102 transition-transform duration-500"
                src="/et-studio.png"
                alt="Evertutor Studio"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
