import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    fontFamily:{
      'mako':['Makota'],
      'thab' :['Thabit'],
    },
    textColor:{
      'ci-1':'#2B2B2B'

    },
    extend: {
      inset:{
        'prop-1-t':'-15rem',
        'prop-1-r':'-20rem',
        'prop-2-t':'-27rem',
        'prop-2-r':'-0rem',
        'sqr-1':'5rem',
        'sqr-2':'25rem',
        'prop-3-right':'10rem'
      },
      colors:{
        'ci-1':'#2b2b2b'
      }
    }
  },
  plugins: [],
}
export default config
