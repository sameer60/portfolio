import Link from "next/link";
import React from "react";

const ExternalLink = ({ href, className, children }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </Link>
    );
};

export default ExternalLink;
