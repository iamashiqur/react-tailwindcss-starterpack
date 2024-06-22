/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{html,js}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      // all color
      colors: {
        primary: "#FF3D48",
      },
      // all box shadow
      boxShadow: {
        button: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    }
  },
  plugins: []
}
