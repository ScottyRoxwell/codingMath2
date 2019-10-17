const path = require("path");

module.exports = {
  entry: {
    main: ["@babel/polyfill","./src/index.js"],
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/, 
      },
      {
        test: /\.pug$/,
         use: [
           {loader:"html-loader",options:{attrs:["img:src"]}},
           "pug-html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif|bmp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      }
      // Code for "imports-loader" package
      // {
      //   test: /three\/examples\/js/,
      //   use: 'imports-loader?THREE=three'
      // }
    ]
  }
};