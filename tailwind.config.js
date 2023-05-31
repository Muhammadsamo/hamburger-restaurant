import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
