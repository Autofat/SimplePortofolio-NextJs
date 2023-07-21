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
      colors:{
        backgorund:{
          400:'#0f0e17'
        },
        button:{
          1:'#ff8906',
          2:'#f25f4c'
        },
        headline:{
          400:'#fffffe'
        },
        paragraph:{
          400:'#a7a9be'
        },
        teritary:{
          400:'#e53170'
        }
      }
    },
  },
  plugins: [],
}
