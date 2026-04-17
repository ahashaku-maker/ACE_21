/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          table: 'var(--bg-table)',
        },
        gold: {
          primary: 'var(--gold-primary)',
          bright: 'var(--gold-bright)',
          dim: 'var(--gold-dim)',
        },
        danger: 'var(--danger)',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
