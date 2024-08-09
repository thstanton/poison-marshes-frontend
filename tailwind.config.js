/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        homemade: ['"Homemade Apple"', "cursive"],
        pinyon: ['"Pinyon Script"', "cursive"],
        rock: ['"Rock Salt"', "cursive"],
        special: ['"Special Elite"', "cursive"],
        unica: ['"Unica One"', "cursive"],
      },
      animation: {
        blink: "blink 1s steps(5, start) infinite",
      },
      keyframes: {
        blink: {
          to: { display: "none" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
  },
};
