/** 
 * @copyright 2025 Looknath
 * @license Apache-2.0
*/


/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwindcss-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"]
    },
    extend: {
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.5)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.5)' },
          '70%': { transform: 'scale(1)' }
        }
      },
      animation: {
        'heartbeat': 'heartbeat 1s ease-in-out infinite'
      }
    }
  },
  plugins: [tailwindScrollbar],
};