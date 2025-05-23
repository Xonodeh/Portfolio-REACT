/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apple: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
}
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        apple: '0 4px 16px rgba(0,0,0,0.08)',
      },
    },
  },
};
