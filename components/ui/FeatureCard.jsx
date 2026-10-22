import React from "react";

const FeatureCard = ({ icon, title, description, iconWrapperClass, delay, titleClass = "" }) => {
    return (
        <div
            data-aos-delay={delay}
            className="rounded-2xl bg-neutral p-6 text-center hypr-card relative group"
        >
            <div
                className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-2xl border border-base-300 ${iconWrapperClass}`}
            >
                {icon}
            </div>
            <h1 className={`mb-3 text-xl font-medium lg:px-14 ${titleClass}`}>
                {title}
            </h1>
            <p className="px-4">{description}</p>
        </div>
    );
};

export default FeatureCard;
