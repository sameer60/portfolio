"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top p-3 rounded-2xl transition-all duration-300 hover:scale-110 border-2 border-black"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
