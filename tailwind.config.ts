import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Avenir',
        'Roboto',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        yellow: '#fbffa7',
        orange: '#ff764d',
        darkorange: '#fd5948',
        lightblue: '#b1c5ff',
        purple: '#d5b3ff',
        green: '#b6ffc0',
        blue: '#0000ff',
        separator: '#eee',
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
      },
      screens: {
        'larger': '1124px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '128': '32rem',
        screenh: '100vh',
        '4/5sh': '80vh',
        '5/6sh': '83.333333vh',
        '1/12vw': '8.333333vw',
      },
    },
  },
  plugins: [],
};
export default config;
