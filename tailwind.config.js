/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        "card_shadow": '0px 20px 60.571px 0px #E5E9F6'
      }
    },
  },
  plugins: [],
}

