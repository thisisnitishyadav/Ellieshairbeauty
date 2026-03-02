/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Cormorant Garamond'", "serif"],
        sans: ["'Jost'", "sans-serif"],
      },
      colors: {
        cream: "#FAF7F2",
        champagne: "#F0E6D3",
        "rose-gold": "#C9956B",
        "rose-light": "#E8C4A0",
        "rose-dark": "#A67050",
        espresso: "#2C1A0E",
        mocha: "#5C3D2E",
        sage: "#8A9E8A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2s infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "112": "28rem",
        "128": "32rem",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "html": { scrollBehavior: "smooth" },
        "body": {
          backgroundColor: theme("colors.cream"),
          color: theme("colors.espresso"),
          fontFamily: theme("fontFamily.body"),
          fontSize: "18px",
          lineHeight: "1.7",
          WebkitFontSmoothing: "antialiased",
        },
        "::selection": {
          backgroundColor: theme("colors.rose-gold"),
          color: theme("colors.cream"),
        },
        "::-webkit-scrollbar": { width: "6px" },
        "::-webkit-scrollbar-track": { background: theme("colors.cream") },
        "::-webkit-scrollbar-thumb": {
          background: theme("colors.rose-gold"),
          borderRadius: "3px",
        },
      });
    },
  ],
};
