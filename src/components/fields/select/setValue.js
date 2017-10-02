import $select from "./$select"
import each from "lodash/each"
import isArray from "lodash/isArray"
import isObject from "lodash/isObject"

export default (vm) => {
  const value = vm.get()
  // const { valueField } = options(vm)

  const { selectize } = $select(vm).get(0)
  const { labelField, valueField } = selectize.settings

  // console.log(value, selectize)

  if (isArray(value)) {
    const values = []
    each(value, (value) => {
      selectize.addOption(value2Option(value))
      values.push(value2Set(value))
    })
    selectize.setValue(values, true)
  } else {
    selectize.addOption(value2Option(value))
    selectize.setValue(value2Set(value), true)
  }

  function value2Option(value) {
    if (isObject(value)) {
      return value
    }
    return { [valueField]: value, [labelField]: value }
  }

  function value2Set(value) {
    if (!isObject(value)) {
      return value
    }
    return value[valueField]
  }
}
