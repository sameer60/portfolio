import React from "react";
import { ImMobile2 } from "react-icons/im";
import { BsStars } from "react-icons/bs";
import { IoPlanet } from "react-icons/io5";

export const featuresData = [
    {
        id: 1,
        icon: <ImMobile2 className="h-8 w-8 text-white" />,
        title: "Responsive Design",
        description:
            "The world has gone mobile - so why not your website? I specialize in responsive web design so you never have to worry about your content being seen by customers or users no matter what device they're on.",
        iconWrapperClass: "bg-teal-400 shadow-teal-500/40",
    },
    {
        id: 2,
        delay: "150",
        icon: <BsStars className="h-8 w-8 text-white" />,
        title: "Clean Code",
        description:
            "I keep myself up-to-date on the newest tools and technologies like ReactJS, NextJS or Tailwind CSS (just to name a few). I Choose best tools for the task at hand to implement them in the most effective way.",
        iconWrapperClass: "bg-rose-500 shadow-rose-500/40",
        titleClass: "text-darken",
    },
    {
        id: 3,
        delay: "150",
        icon: <IoPlanet className="h-8 w-8 text-white" />,
        title: "Cutting Edge",
        description:
            "I stay ahead in web development by mastering the latest tools like ReactJS, NextJS, and Tailwind CSS, ensuring innovative and efficient solutions.",
        iconWrapperClass: "bg-sky-500 shadow-sky-500/40",
        titleClass: "text-darken",
    },
];
