const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  purge: isProduction ? ['./src/**/*.html', './src/**/*.jsx'] : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
