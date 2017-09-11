import $select from "./$select"
import each from "lodash/each"
import options from "./options"
export default (vm) => {
  console.debug("make", vm.name, $select(vm))
  $select(vm)
    .selectize(options(vm))
    .on("change", change)
    .get(0)
    .selectize
    .setValue(vm.value)

  function change(event) {
    const values = []
    const { selectize } = $select(vm).get(0)
    const data = selectize.getValue()

    each(data, (value) => {
      try {
        values.push(vm.type === Object ? selectize.options[value] : vm.type(value))
      } catch (error) {
        console.warn(error)
      }
    })
    vm.set(values)
  }
}
