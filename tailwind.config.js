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
        body: ['Inter', 'Arial', 'sans-serif'],
        title: ['Rubik', 'sans-serif'], // Font for titles (h1, h2, etc.)
        content: ['Rubik', 'sans-serif'], // Font for content (p, div, etc.)


        irahelvetica: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica with fallbacks
        roboto : ['Roboto', 'Arial', 'sans-serif'],
        iramontserrat: ["Montserrat", "sans-serif"],
        irapoppins: ["Poppins", "sans-serif"],
        iraoswald: ["Oswald", "sans-serif"],
        iralato: ["Lato", "sans-serif"],
        iraraleway: ["Raleway", "sans-serif"],
        iraplayfair: ["Playfair Display", "serif"],
        iraopensans: ["Open Sans", "sans-serif"],
        iraopen: ["Open Sans Condensed", "sans-serif"],
        iraarial: ["Arial", "sans-serif"],
        iraarialblack: ["Arial Black", "sans-serif"],
        iravertical: ["Arial", "sans-serif"], // Add Arial with fallbacks
        irabold: ["Arial Bold", "sans-serif"], // Add Arial Bold with fallbacks
      },
      screens: {
        'laptop': '780px', // Define a custom breakpoint for 1488px
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
      subimages: 
      {
        width: "202px",
        height: "102px",
      },
    },
  },
  keyframes: {
    fadeInDown: {
      '0%': { opacity: 0, transform: 'translateY(-20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    fadeInDown: 'fadeInDown 0.5s ease-in-out',
  },
}

