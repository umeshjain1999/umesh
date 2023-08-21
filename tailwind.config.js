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
        50: "var(--zinc-50)",
        100: "var(--zinc-100)",
        200: "var(--zinc-200)",
        300: "var(--zinc-300)",
        400: "var(--zinc-400)",
        500: "var(--zinc-500)",
        600: "var(--zinc-600)",
        700: "var(--zinc-700)",
        800: "var(--zinc-800)",
        900: "var(--zinc-900)",
        950: "var(--zinc-950)",
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
