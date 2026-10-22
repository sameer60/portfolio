import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-base-100">
      <div className="flex flex-col items-center bg-neutral hypr-card border border-base-300 rounded-3xl p-12 shadow-2xl">
        <h1 className="text-[100px] md:text-[120px] font-extrabold text-primary leading-none">
          404
        </h1>
        <p className="text-2xl font-bold mb-6 text-neutral-content">
          Page Not Found
        </p>
        <Link
          href="/"
          className="btn btn-primary px-6 py-2 font-semibold rounded-xl shadow-md shadow-primary/20 transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
