import clone from "lodash/clone"
import each from "lodash/each"
import isUndefined from "lodash/isUndefined"

export default function (defaults, properties, source) {
  const options = clone(defaults)

  if (!source) {
    return options
  }

  each(properties, (property) => {
    const value = source[property]
    if (!isUndefined(value)) {
      options[property] = source[property]
    }
  })
  return options
}
