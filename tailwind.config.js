const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  purge: isProduction ? ['./src/**/*.html', './src/**/*.jsx'] : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        header: '5rem',
        middle: '2rem',
      },
    },
    fontFamily: {
      openSans: ['"Open Sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
