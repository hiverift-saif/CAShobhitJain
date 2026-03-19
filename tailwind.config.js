/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4761c',       // CA India orange/saffron
        'ca-blue': '#1e6fa5',     // CA India steel blue
        'ca-green': '#1b9a3f',    // CA India green
        body: '#3d5080',
        heading: '#0e2a5e',
        black: '#0e2a5e',
        'bg-main': '#f0f5ff',
        border: '#cdd9f0',
        'secondary-dark': '#071a3e',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"Lato"', 'sans-serif'],
      },
      maxWidth: {
        'container': '1600px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
