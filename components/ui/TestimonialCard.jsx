/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimonialCard = ({ name, role, image, text }) => {
    return (
        <li className="text-sm leading-6">
            <div className="p-6 space-y-6 leading-none rounded-2xl bg-neutral hypr-card">
                <div className="flex items-center space-x-4">
                    <img
                        src={image}
                        className="w-12 h-12 bg-center bg-cover rounded-full border border-base-300"
                        alt={name}
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-content">{name}</h3>
                        <p className="text-md text-neutral-content/70">{role}</p>
                    </div>
                </div>
                <p className="leading-normal text-md text-neutral-content/90">{text}</p>
            </div>
        </li>
    );
};

export default TestimonialCard;
