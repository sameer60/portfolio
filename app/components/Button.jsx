import React from "react";
import Link from "next/link";

const Button = ({
    variant = "primary",
    href,
    target,
    onClick,
    type = "button",
    className = "",
    children,
    ...props
}) => {
    const baseStyles = "btn inline-flex border-0 py-2 px-6 focus:outline-none text-lg";
    const variantStyles = {
        primary: "btn-primary",
        secondary: "btn-secondary",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        if (href.startsWith("#") || href.startsWith("/")) {
            // Check if it's an internal link but not a file resource like pdf
            const isFile = href.includes(".");
            if (!isFile) {
                return (
                    <Link href={href} className={combinedClassName} {...props}>
                        {children}
                    </Link>
                );
            }
        }

        return (
            <a
                href={href}
                className={combinedClassName}
                target={target}
                rel={target === "_blank" ? "noreferrer" : undefined}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={combinedClassName}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
