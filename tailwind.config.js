/** @type {import('tailwindcss').Config} */
module.exports = {
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ],
        },
    ],
},
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      {
        irahelvetica: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica with fallbacks
        roboto : ['Roboto', 'Arial', 'sans-serif'],
      },
     
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        iraprimary: "#FF1E28",
        iraprimaryb: "#14146E",
      },
      boxShadow: {
        'custom-blue': '0 4px 6px rgba(59, 130, 246, 0.5)', // blue-500
        'custom-red': '0 4px 6px rgba(239, 68, 68, 0.5)', // red-500
        'custom-green': '0 4px 6px rgba(34, 197, 94, 0.5)', // green-500
      },
    },
  },
 
}

