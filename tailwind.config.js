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
        'rise-deep': '#0B5472',

        // Icons / Micro Accents / Links - Cornflower Ocean
        'rise-ocean': '#0B5472',

        // MAIN HEADER / Primary Buttons / Hover Borders - Turquoise Surf
        'rise-surf': '#0B5472',

        // Borders / Subtle Highlights - Frosted Blue (Tint of #0B5472)
        'rise-frost': '#A8D4E3',

        // Section Tints (Very Light) - Azure Mist (Tint of #0B5472)
        'rise-mist': '#F0F8FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
