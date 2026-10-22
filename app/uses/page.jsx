/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import UsesSection from "@/components/sections/UsesSection";
import { usesData } from "@/data/uses";

const Uses = () => {
  return (
    <section className="h-full body-font bg-base-100">
      <div className="container px-5 py-24 mx-auto">
        <h1 className=" text-center text-3xl md:text-5xl font-bold tracking-tight">
          Uses
        </h1>
        <p className="max-w-4xl mx-auto my-6 text-center text-lg text-balance">
          After shamelessly taking the idea from Wes Bos's{" "}
          <Link
            href="https://uses.tech/"
            target="_blank"
            className="underline font-semibold"
          >
            uses.tech
          </Link>
          . I made a page where I list the stuff I use every day. I enjoy seeing
          what others use, so I added this for anyone curious about it.
        </p>
        <div className="flex justify-center w-full mb-16">
          <img
            className="rounded-2xl object-cover lg:h-96 h-60 md:h-72"
            src="https://res.cloudinary.com/didtdrgsj/image/upload/v1792643602/screenshot-2026-10-22_10-03-02_hdo2pb.png"
            alt="neofetch"
          />
        </div>

        {usesData.map((section, index) => (
          <UsesSection
            key={index}
            title={section.title}
            icon={section.icon}
            items={section.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Uses;
