/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        purple: "#A02279",
        black: "#1D1D1E",
        gray: "rgba(64, 64, 64, 0.3)",
        cardBorderGray: "#D7D7D7",
        textBlack: "#434343",
        placeholderGray: "#B8B8B8",
        inputBorderGray: "#A3A3A3",
        locationGray: "#B4B4B4",
        midGray: "#CFD8DC",
        lightGray: "#F8F9FA",
        anotherBlack: "#333333",
      },
      fontFamily: {
        "red-rose": ["Red Rose", "cursive"],
        sora: ["Sora", "sans-serif"],
      },
      fontSize: {
        "7xl": [
          "3.5rem",
          {
            lineHeight: "4.875rem",

            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
