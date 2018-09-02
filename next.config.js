const withStylus = require('@zeit/next-stylus');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');

module.exports = withStylus({
  cssModules: true,
  camelCase: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]-[local]'
  },
  stylusLoaderOptions: {
    use: [
      poststylus([autoprefixer({flexbox: 'no-2009'})])
    ]
  },
  exportPathMap: function (defaultPathMap) {
    return {
      '/': {page: '/'}
    }
  }
});
