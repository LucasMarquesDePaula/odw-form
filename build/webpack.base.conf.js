var path = require("path")
var utils = require("./utils")
var config = require("../config")
var vueLoaderConfig = require("./vue-loader.conf")

var isProduction = process.env.NODE_ENV === "production"

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

module.exports = {
  entry: {
    main: isProduction ? ["./src/main.prod.js"] : ["./src/main.js"]
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    library: "ODWForm",
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [resolve("src"), resolve("test")],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src"), resolve("test")]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath(isProduction ? "img/[name].[ext]" : "img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath(isProduction ? "media/[name].[ext]" : "media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath(isProduction ? "fonts/[name].[ext]" : "fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  }
}