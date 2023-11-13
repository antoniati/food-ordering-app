/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main Colors
        'dark-orange': '#D65305',
        'dark-red': '#891700',
        'dark-brown': '#3A2C20',
        'light-green': '#608408',
        'light-yellow': '#EBC665',
      },
      height: {
        'card': "400px",
      }
    },
  },
  plugins: [],
}
