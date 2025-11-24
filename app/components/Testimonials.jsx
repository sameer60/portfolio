/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonies" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <h1 className="mb-5 text-4xl font-bold md:text-center md:text-5xl">
              What others say.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            {testimonialsData.column1.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </ul>

          <ul className="hidden space-y-8 lg:block">
            {testimonialsData.column2.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </ul>

          <ul className="hidden space-y-8 sm:block">
            {testimonialsData.column3.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
