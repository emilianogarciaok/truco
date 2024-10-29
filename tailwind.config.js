/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // Añade las rutas de tus componentes y pantallas donde usas NativeWind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
