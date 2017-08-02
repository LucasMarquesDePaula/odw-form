module.exports = {
  component: require("./odw-form"),
  install(Vue) {
    Vue.component("odw-form", module.exports.component)
  }
}
