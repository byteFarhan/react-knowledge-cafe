/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#30b596",

          secondary: "#e88f66",

          accent: "#1c1670",

          neutral: "#24212c",

          "base-100": "#f7f7f8",

          info: "#4cc3eb",

          success: "#4bd27d",

          warning: "#d49816",

          error: "#e66c5c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
