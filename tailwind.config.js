/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        auto: "auto",
      },
      colors: {
        ink: "#592C03",
        accent: "#F7861D",
        accentText: "#A85A0E",
        sand: "#B9A390",
        sandDark: "#7D6858",
        charcoal: "#14100D",
        paper: "#FFFFFF",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "400ms",
        slow: "700ms",
      },
    },
  },
  plugins: [],
};
