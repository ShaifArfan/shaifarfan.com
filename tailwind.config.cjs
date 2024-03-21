/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
      },
      colors: {
        darkBlue: '#0C101B',
        primary: '#3858CA',
        brand: {
          50: '#ecf1ff',
          100: '#d9e0f9',
          200: '#afbdeb',
          300: '#8599de',
          400: '#6179d4',
          500: '#4a66cd',
          600: '#3d5ccb',
          700: '#2f4db4',
          800: '#2644a2',
          900: '#193990',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
