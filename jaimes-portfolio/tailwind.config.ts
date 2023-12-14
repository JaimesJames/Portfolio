import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {textColor:
      {
      'ci-1':'#2B2B2B'

    },
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
        'ci-1':'#2B2B2B',
        'D8DDB6': '#D8DDB6',
        '68B8B9': '#68B8B9',
        '674188': '#674188',
        '57AE00': '#57AE00',
        'FF0087': '#FF0087',
        '121212':'#121212',
        'A7271A': '#A7271A'
      },
      rotate:{
        '225': '225deg'
      },
      screen: {
        'tablet':'640px',
        'mac':'1920px',
        'desktop':'1280px'
      },
      height:{
        '500':'500px'
      },
      fontFamily:{
        'mako':['Makota'],
        'thab' :['Thabit'],
        'mono' :['MajorMonoDisplay-Regular']
      },
    },
    
  },
  plugins: [],
}
export default config
