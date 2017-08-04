var utils = require("./utils")
var config = require("../config")

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: process.env.NODE_ENV === "production" ? config.build.productionSourceMap : config.dev.cssSourceMap,
    extract: process.env.NODE_ENV === "production"
  }),
  transformToRequire: {
    video: "src",
    source: "src",
    img: "src",
    image: "xlink:href"
  }
}
