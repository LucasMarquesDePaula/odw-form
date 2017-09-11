import $select from "./$select"

export default (vm) => {
  $select(vm).get(0).selectize.destroy()
}
