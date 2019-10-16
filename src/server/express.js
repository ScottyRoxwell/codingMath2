import express from "express";
import path from "path";

const port = process.env.PORT || 3000;

const server = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(compiler,config.devServer)

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

server.set('views', path.join(__dirname, 'src/views'));
server.set('view engine', 'pug');
server.use(express.static('dist'));
server.use(express.static('src'));

server.listen(port, () => {
  console.log("The server is up and running!");
});