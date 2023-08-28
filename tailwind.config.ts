/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './app/components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
            primary: {
                100: '#E6F2F2',
                200: '#B3D9D9',
                300: '#80C0C0',
                400: '#4DA6A6',
              },
            secondary: {
                100: '#F0F4F4',
                200: '#D9E0E0',
                300: '#C2CACA',
                400: '#ABB3B3',
              },
            tertiary: {
                100: '#FAFBF9',
                200: '#F0F2EF',
                300: '#E6E9E4',
                400: '#DCDFDA',
              },
            error: {
                100: '#FFD9D9',
                200: '#FFA6A6',
                300: '#FF7373',
                400: '#FF4040',
              },
            disabled: {
                100: '#F2F2F2',
                200: '#D9D9D9',
                300: '#C0C0C0',
                400: '#A6A6A6',
              },
            overlayBackground: {
                100: '#00000040',
            },
        },
      },
    },
    plugins: [
        require("@tailwindcss/forms")({
          strategy: 'class'
        })
    ],
  }
  