/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // STRICT ACADEMIC PALETTE

        // Text Accents (Headings) - Deep Twilight
        'rise-deep': '#030663',

        // Icons / Micro Accents / Links - Cornflower Ocean
        'rise-ocean': '#006AA3',

        // MAIN HEADER / Primary Buttons / Hover Borders - Turquoise Surf
        'rise-surf': '#00AACC',

        // Borders / Subtle Highlights - Frosted Blue
        'rise-frost': '#82DDED',

        // Section Tints (Very Light) - Azure Mist
        'rise-mist': '#EDFAFD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
