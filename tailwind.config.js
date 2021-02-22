module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      tomato: "#ff5757",
      coral: "#fe7e5d",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      tomato: "#ff5757",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      tomato: "#ff5757",
    }),
    extend: {
      lineHeight: {
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
