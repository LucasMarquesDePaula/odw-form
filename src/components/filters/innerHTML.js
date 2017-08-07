import isFunction from "lodash/isFunction"
module.exports = function (html) {
  return isFunction(html) ? html() : html
}
