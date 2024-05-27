import React from "react";

const NotFound = () => {
  return (
    <div class="flex flex-col h-screen justify-center items-center bg-base-100">
      <div class="flex flex-col items-center">
        <h1 class="text-[120px] font-extrabold">404</h1>
        <p class="text-2xl font-medium mb-6">Page Not Found</p>
        <a
          href="/"
          class="btn btn-secondary px-4 py-2 font-medium transition-all duration-200 ease-in-out"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
