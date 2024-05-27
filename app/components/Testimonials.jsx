/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

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
            {/* Ankush */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-base-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/ankush.jpeg"
                        className="w-12 h-12 bg-center bg-cover rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Ankush Singh</h3>
                        <p className="text-md">Frontend developer</p>
                      </div>
                    </div>
                    <p className="leading-normal text-md">
                      Sameer is an enthusiastic and resourceful developer, sure
                      to be a valuable asset to any organization!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            {/* Manjunath */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-base-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/manju.jpeg"
                        className="w-12 h-12 bg-center bg-cover rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold ">Manjunatha N</h3>
                        <p className=" text-md">Technical lead</p>
                      </div>
                    </div>
                    <p className="leading-normal text-md">
                      We've shared an incredible journey together. I deeply
                      appreciate his profound intellect as a valuable teammate.
                      Excited to continue our enriching discussions ahead!
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 sm:block">
            {/* Syfulla */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-base-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/syfulla.jpeg"
                        className="w-12 h-12 bg-center bg-cover rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold ">Syfulla</h3>
                        <p className=" text-md">Fullstack developer</p>
                      </div>
                    </div>
                    <p className="leading-normal  text-md">
                      Sameer's exceptional skills and readiness to assist make
                      him a standout collaborator!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            {/* chandu */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-base-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/chandu.jpeg"
                        className="w-12 h-12 bg-center bg-cover rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold ">
                          Chandrashekhar
                        </h3>
                        <p className=" text-md">Frontend developer</p>
                      </div>
                    </div>
                    <p className="leading-normal  text-md">
                      Sameer is an outstanding developer, swiftly grasping
                      concepts, executing tasks with precision, and showcasing
                      exceptional problem-solving skills!
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-base-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold ">
                          Parag Agrawal
                        </h3>
                        <p className=" text-md">CEO of Twitter</p>
                      </div>
                    </div>
                    <p className="leading-normal  text-md">
                      Enim neque volutpat ac tincidunt vitae semper. Mattis
                      aliquam faucibus purus in massa tempor. Neque vitae tempus
                      quam pellentesque nec. Turpis cursus in hac habitasse
                      platea dictumst.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-base-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold ">Tim Cook</h3>
                        <p className=" text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal  text-md">
                      Diam quis enim lobortis scelerisque fermentum dui faucibus
                      in ornare. Donec pretium vulputate sapien nec sagittis
                      aliquam malesuada bibendum.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
