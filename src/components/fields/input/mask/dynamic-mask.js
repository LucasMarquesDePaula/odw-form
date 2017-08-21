/* eslint-disable */
import sortBy from "lodash/sortBy"

export default function dynamicMask(maskit, masks, tokens) {
  masks = sortBy(masks, "length")
  return function (value, mask, masked = true) {
    var i = 0
    while (i < masks.length) {
      var currentMask = masks[i]
      i++
      var nextMask = masks[i]
      if (!(nextMask && maskit(value, nextMask, true, tokens).length > currentMask.length)) {
        return maskit(value, currentMask, masked, tokens)
      }
    }
    return "" // empty masks
  }
}
