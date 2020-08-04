module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/pdf': {
        target: 'http://139.196.19.69:8100',
        // changOrigin: true,
        pathRewrite: { '^/pdf': '' },
      },
    },
  },
};
