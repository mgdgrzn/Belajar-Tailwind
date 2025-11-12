/** @type {import('tailwindcss').Config} */
module.export = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "80%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      Animation: {
        "open-menu": "open-menu 0.5s ease-in-ut forwards",
      },
    },
  },
  plugins: [],
};
