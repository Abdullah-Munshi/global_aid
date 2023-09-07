/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17E71E",
      },
      fontSize: {
        xl_prev: "0.688rem",
        xs_next: "0.8125rem",
        base_next: "1.0625rem",
      },
      fontFamily: {
        "inria-sans": ["Inria Sans", "sans-serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-one": "linear-gradient(176deg, #1455A0 0%, #0E2963 99.73%)",
        "gradient-two": "linear-gradient(137deg, #05FF05 0%, #A991F0 100%)",
        "gradient-three":
          "linear-gradient(266deg, #575081 3.15%, #413493 98.93%)",
        "gradient-four": "linear-gradient(269deg, #3E4154 0%, #303242 100%)",
        "gradient-five":
          "linear-gradient(108deg, #303986 12.12%, #3F4155 86.5%)",
        "gradient-six":
          "linear-gradient(117deg, #05FF05 16.67%, #A991F0 82.88%)",
      },
      borderRadius: {
        10: "0.625rem",
      },
      boxShadow: {
        one: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
        two: "0px 0px 3px 1px rgba(0, 0, 0, 0.25)",
        three: "0px 1px 5px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
