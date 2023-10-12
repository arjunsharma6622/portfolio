/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#0D0D0D', // Very dark gray (Primary Background Color)
        'secondary': '#141414', // Dark gray (Secondary Background Color)
      },
      textColor: {
        'white': '#FFFFFF', // White (Text Color)
        'gray': '#808080', // White (Text Color)
      },
      borderColor: {
        'primary': '#383737', // White (Border Color)
      },
      gradientColorStops: {
        'accent1': '#00FFB7', // Aqua or cyan (Accent Color 1)
        'accent2': '#FF6B00', // Orange (Accent Color 2)
        'accent3': '#FFD600', // Yellow (Accent Color 3)
      },

      // Define custom gradient text classes
      backgroundImage: {
        'gradient-skill': 'linear-gradient(90deg, #ff6699 0%, #ff3366 100%)',
        'gradient-about': 'linear-gradient(90deg, #3366ff 0%, #66ccff 100%)',
        'gradient-projects': 'linear-gradient(90deg, #ffcc66 0%, #ff9900 100%)',
        'gradient-silver': 'linear-gradient(90deg, #c0c0c0 0%, #808080 100%)',

    },
  },
},
plugins: [],
}

