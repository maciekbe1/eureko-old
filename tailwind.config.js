module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      colors: {
        navy: {
          900: "#050c15",
          800: "#081525",
          700: "#0c1e35",
          600: "#102745",
          500: "#133055",
          400: "#173965",
          300: "#1a4275",
          200: "#1e4b85",
          100: "#225495",
        },
      },
    },
  },
  variants: {
    extend: {
      padding: ["first", "last"],
    },
  },
  plugins: [],
};
