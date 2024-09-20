/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // Enables dark mode based on system preferences
  theme: {
    extend: {
      colors: {
        main: '#bd52eb',
        mainAccent: '#a81be4', // Optional, not required for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // For background overlays in modals, alerts, etc.

        // Light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',

        // Dark mode
        darkBg: '#1D1F27',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#1b1b1b', // Slightly lighter than pitch black for contrast
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000', // Shadow for light mode
        dark: '4px 4px 0px 0px #000', // Shadow for dark mode
      },
      translate: {
        boxShadowX: '4px', // For offsetting shadows along the X-axis
        boxShadowY: '4px', // For offsetting shadows along the Y-axis
        reverseBoxShadowX: '-4px', // Reverse offset for X-axis
        reverseBoxShadowY: '-4px', // Reverse offset for Y-axis
      },
      fontWeight: {
        base: '500', // Base font weight for text
        heading: '700', // Heavier font weight for headings
      },
    },
  },
  plugins: [],
};
