module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{jsx,ts,js,tsx}"],
  theme: {
    extend: {
      screens: {
        break: "840px",
      },
    },
  },
  plugins: [],
};
