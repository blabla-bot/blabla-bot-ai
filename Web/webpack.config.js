const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");

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
      'client': './src/client/client.tsx',
    },
    output: {
      path: path.join(__dirname, "./static/dist")
    },
    module: {
      rules: [{
        test: /\.(scss)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }]
    },
    devtool: "source-map",
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          options: {
            discardComments: {
              removeAll: true,
            },
            safe: true,
          },
        },
        canPrint: false,
      })
    ]
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

  const stylesConfig = {
    entry: {
      'client': './src/client/styles.js',
    },
    mode: !(env && env.prod) ? "development" : "production",
    output: {
      path: path.join(__dirname, "./static/dist")
    },
    module: {
      rules: [{
        test: /\.(scss)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }]
    },
    devtool: "source-map",
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          options: {
            discardComments: {
              removeAll: true,
            },
            safe: true,
          },
        },
        canPrint: false,
      })
    ]
  };

  return [
    merge(sharedConfig, clientBundleConfig),
    merge(sharedConfig, serverBundleConfig),
    stylesConfig
  ];
};