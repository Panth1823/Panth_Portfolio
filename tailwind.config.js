module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        xl: "14px",
      },
      height: {
        10: "40px",
      },

      transitionDuration: {
        500: "0.5s",
      },
    },
    fontFamily: {
      signature: "Great Vibes",
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-filters")],
};
