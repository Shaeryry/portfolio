module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        bg: "#0d0d0d",       // main dark background
        surface: "#ffffff",  // card backgrounds
        text: "#111111",     // main text
        primary: "#fff9c4",  // pastel yellow
        secondary: "#f8bbd0",// pastel pink
        accent: "#bbdefb"    // pastel blue
      }
    },
  },
  plugins: [],
};
