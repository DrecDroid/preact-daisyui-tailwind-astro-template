module.exports = {
  content: ["./index.html", "./src/**/*.{astro,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
