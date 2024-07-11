import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "hud-pink": "hsl(322, 100%, 66%)",
        "hud-light-pink": "hsl(321, 100%, 78%)",
        "hud-light-red": "hsl(0, 100%, 63%)",
        // Neutral
        "hud-very-dark-cyan": "hsl(192, 100%, 9%)",
        "hud-very-pale-blue": "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        copy: "400",
        semibold: "600",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
