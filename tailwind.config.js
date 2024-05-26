/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0E92FF', // Your current blue
        black: '#000000', // Black for footer and navbar
        white: '#FFFFFF', // White background
        lightgray: '#F9FAFB', // Light gray background
        background: '#f7f4e9',
        accent1: '#b53320', // Darker tomato red
        accent2: '#cc7a00', // Darker orange
        accent3: '#B58900', // Darker yellow
        accent4: '#357a38', // Darker green
        accent5: '#004d80', // Darker blue
        accent6: '#732673', // Darker purple
        accent7: '#4d3d00', // Darker brown
        'shadow-color': 'rgb(38, 57, 77)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      boxShadow: {
        custom: '0px 20px 30px -10px var(--shadow-color)', // Use the defined shadow color variable
      },
    },
  },
  plugins: [],
};
