/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^mdi/, // Garante que as classes MDI (icons) sejam mantidas
    },
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#2F2F2F',
        secondary: '#717171',
        accent: '#235690',
      },
      backgroundColor: {
        primary: '#F2F2F2',
        secondary: '#516378',
        terciary: '#506378',
        accent: '#235690',
      },
    },
  },
  plugins: [],
}

