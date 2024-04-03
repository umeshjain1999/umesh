/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ".dark-theme"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      zinc: {
        50: "rgba(var(--zinc-50) , <alpha-value>)",
        100: "rgba(var(--zinc-100) , <alpha-value>)",
        200: "rgba(var(--zinc-200) , <alpha-value>)",
        300: "rgba(var(--zinc-300) , <alpha-value>)",
        400: "rgba(var(--zinc-400) , <alpha-value>)",
        500: "rgba(var(--zinc-500) , <alpha-value>)",
        600: "rgba(var(--zinc-600) , <alpha-value>)",
        700: "rgba(var(--zinc-700) , <alpha-value>)",
        800: "rgba(var(--zinc-800) , <alpha-value>)",
        900: "rgba(var(--zinc-900) , <alpha-value>)",
        950: "rgba(var(--zinc-950) , <alpha-value>)",
      },
      blue: {
        50:"#eff6ff",
        100:"#dbeafe",
        200:"#bfdbfe",
        300:"#93c5fd",
        400:"#60a5fa",
        500:"#3b82f6",
        600:"#2563eb",
        700:"#1d4ed8",
        800:"#1e40af",
        900:"#1e3a8a",
        950:"#172554"
      }
    },
    boxShadow: {
      'default' : 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
      'dark' : 'rgba(255, 255, 255, 0.1) 0px 10px 50px',
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
