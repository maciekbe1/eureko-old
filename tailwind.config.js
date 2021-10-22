module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
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
