const path = require('path');

module.exports = (_env, argv) => {
  const stepDir = path.resolve(argv.context || './1');

  return {
    context: stepDir,
    entry: './src/main.jsx',
    output: {
      path: `${stepDir}/dist`,
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: `${stepDir}/dist`,
      watchContentBase: true,
      host: '0.0.0.0',
      port: 9876,
      open: true,
    },
  };
};
