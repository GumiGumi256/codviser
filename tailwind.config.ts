import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green: {
          10: '#06665f',
          50: '#02ff95',
          90: '#003128',
        },
        gray: {
          
          20: '#f7f7f7',
          30: '#D1FFEB',
          50: '#E8FFF5'
         
        },
        blue: {
          70: '#021639',
        },
        orange: {
          50: '#f59220',
          20: '#FF2A03'
        },
       bgColor: {
        50: '#00FF94'
       }
      },
      fontFamily: {
        sans: ['inter', 'sans-serif'],
      },
      backgroundImage: {
        'bg-img-1': "linear-gradient(90deg, rgba(10,22,32,1) 0%, rgba(5,11,14,1) 40%);",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config