const path = require('path');
const merge = require('webpack-merge');

module.exports = (env) => {
  // Configuration in common to both client-side and server-side bundles
  const sharedConfig = {
    mode: !(env && env.prod) ? "development" : "production",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      modules: ["node_modules", path.resolve(__dirname, 'src')]
    },
    output: {
      filename: '[name].js',
      publicPath: 'dist/'
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      }]
    },
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    }
  };

  // Configuration for client-side bundle suitable for running in browsers
  const clientBundleConfig = {
    entry: {
      'client': './src/client/client.tsx'
    },
    output: {
      path: path.join(__dirname, "./static/dist")
    },
    devtool: "source-map"
  };

  // Configuration for server-side (prerendering) bundle suitable for running in Node
  const serverBundleConfig = {
    entry: {
      'server': './src/server/server.tsx'
    },
    output: {
      libraryTarget: 'commonjs',
      path: path.join(__dirname, "dist")
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    target: 'node',
    devtool: "none"
  };

  return [
    merge(sharedConfig, clientBundleConfig),
    merge(sharedConfig, serverBundleConfig)
  ];
};