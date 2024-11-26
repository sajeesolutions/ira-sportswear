/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0 4px 6px rgba(59, 130, 246, 0.5)', // blue-500
        'custom-red': '0 4px 6px rgba(239, 68, 68, 0.5)', // red-500
        'custom-green': '0 4px 6px rgba(34, 197, 94, 0.5)', // green-500
      },
    },
  },
  plugins: [],
}

