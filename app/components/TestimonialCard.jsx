/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimonialCard = ({ name, role, image, text }) => {
    return (
        <li className="text-sm leading-6">
            <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-base-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                        <img
                            src={image}
                            className="w-12 h-12 bg-center bg-cover rounded-full"
                            alt={name}
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{name}</h3>
                            <p className="text-md">{role}</p>
                        </div>
                    </div>
                    <p className="leading-normal text-md">{text}</p>
                </div>
            </div>
        </li>
    );
};

export default TestimonialCard;
