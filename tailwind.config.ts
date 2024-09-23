// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout.tsx',
    './page.tsx',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    // Add your breakpoints here
    screens: {
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px', // Extra large screens
      '2xl': '1536px', // 2XL screens
    },
    extend: {
      colors: {
        // CSS variable colors
        background: 'var(--bg-color)',
        textColor: 'var(--text-color)',
        borderColor: 'var(--border-color)',
        buttonBgColor: 'var(--button-bg-color)',
        buttonTextColor: 'var(--button-text-color)',
        hoverBgColor: 'var(--hover-bg-color)',
        focusRingColor: 'var(--focus-ring-color)',
        gridColor: 'var(--grid-color)',
        dotColor: 'var(--dot-color)',

        // Other colors
        main: '#bd52eb',
        mainAccent: '#a81be4',
        overlay: 'rgba(0,0,0,0.8)',

        // Light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',

        // Dark mode
        darkBg: '#1D1F27',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#1b1b1b',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        custom: '2px 2px 0px 0px #000',
        customHover: '6px 6px 0px 0px #000',
        customNegative: '2px -2px 0px 0px #000',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
    },
  },
  plugins: [],
};

export default config;
