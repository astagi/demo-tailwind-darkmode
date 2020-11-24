const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss')('./tailwind.config.js');
const vhfix = require('postcss-100vh-fix');

module.exports = {
  plugins: [
    vhfix,
    tailwindcss,
    autoprefixer,
  ]
};
