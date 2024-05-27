/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        custom: "1280px",
        "custom-end": { max: "1535px" },
      },
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns"), require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "winter",
      "night",
      "forest",
      "lofi",
      "black",
      "synthwave",
      {
        madara: {
          primary: "#2dd4bf",
          secondary: "#1f2937",
          accent: "#34d399",
          neutral: "#e5e7eb",
          "base-100": "#f3f4f6",
          info: "#00a8ff",
          success: "#4ade80",
          warning: "#fcd34d",
          error: "#f87171",
        },
      },
    ],
  },
};
