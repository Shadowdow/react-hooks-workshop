module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brand: '#1890ff',
      black: {
        DEFAULT: '#000',
        15: 'rgba(0,0,0,0.15)',
        25: 'rgba(0,0,0,0.25)',
      }
    },
    spacing: Array.from({length: 96}).reduce((pre, _, idx)=> ({
      ...pre,
      [idx * 4]: `${idx * 4}px`
    }), {}),
    fontSize: Array.from({length: 10}).reduce((pre, _, idx)=> ({
      ...pre,
      [idx * 2 + 12]: `${idx * 2 + 12}px`
    }), {}),
    fontWeight: {
      400: 400,
      500: 500,
      600: 600
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}