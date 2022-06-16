const { AngularWebpackPlugin } = require("@ngtools/webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

class FileMergeWebpackPlugin {
  constructor(files, destination, removeSourceFiles) {
    this.files = files;
    this.destination = destination;
    this.removeSourceFiles = removeSourceFiles;
  }
  apply(compiler) {
    const fileBuffers = [];

    compiler.hooks.afterEmit.tap("FileMergeWebpackPlugin", () => {
      this.files
        .filter((file) => fs.existsSync(file))
        .forEach((file) => fileBuffers.push(fs.readFileSync(file)));

      fs.writeFileSync(this.destination, Buffer.concat(fileBuffers), {
        encoding: "UTF-8",
      });

      if (this.removeSourceFiles) {
        this.files.forEach((file) => fs.unlinkSync(file));
      }
    });
  }
}
module.exports = {
  output: {
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.js$).*\.js$|^(?!.*\.spec\.ts$).*\.ts$/,
        enforce: "pre",
        loader: "@ngtools/webpack",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "projects/prod-packer/tsconfig.app.json",
      }),
    ],
    symlinks: false,
    modules: [path.resolve("node_modules")],
  },
  plugins: [
    new FileMergeWebpackPlugin(
      [
        "dist/prod-packer/runtime.js",
        "dist/prod-packer/polyfills.js",
        "dist/prod-packer/main.js",
      ],
      "./dist/prod-packer/paymentSummary.js",
      true
    ),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, "./projects/prod-packer/src")
    ),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "app/vendor",
          chunks: (chunk) => {
            return chunk.name === "app/main";
          },
        },
      },
    },
  },
};
