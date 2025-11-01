/** @type {import('tailwindcss').Config} */
module.export = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
      },
    },
  },
  plugins: [],
};
