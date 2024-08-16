/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

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
      backgroundImage: {
        "journal-bg":
          "url('https://res.cloudinary.com/drbmqrolz/image/upload/v1723557766/PM_bg_poster.png')",
        "wf-hero-bg":
          "url('https://res.cloudinary.com/drbmqrolz/image/upload/v1723557662/PM_WF_hero.jpg')",
        "worm-puzzle-bg":
          "url('https://res.cloudinary.com/drbmqrolz/image/upload/c_thumb,w_200,g_face/v1723565107/PM_cork_bg.jpg')",
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["cyberpunk"],
  },
};
