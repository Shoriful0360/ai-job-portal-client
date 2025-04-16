/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF",
          secondary: "#16A34A",
        },
      },
    },
    plugins: [require("flowbite/plugin")],
  };