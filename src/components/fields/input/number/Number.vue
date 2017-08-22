<script>
import { format, unformat } from "./utils"

import Input from "../Input"

import isString from "lodash/isString"

import merge from "../../../utils/merge.js"
import money from "./directive"

function options(vm) {
  return merge({ decimal: ",", precision: 2, prefix: "", suffix: "", thousands: "." },
    ["decimal", "precision", "prefix", "suffix", "thousands"],
    vm.options)
}

export default {
  name: "of-number",
  extends: Input,
  directives: {
    component: money
  },
  props: {
    type: {
      default: Number
    }
  },
  computed: {
    input() {
      const self = this
      const input = {}

      // :placeholder
      input.placeholder = this.placeholder

      // :type
      // input.type = self.type === Number ? "number" : "text"

      // @input
      input.input = (event) => {
        let { value } = event.currentTarget

        if (self.type === Number) {
          value = unformat(value, options(self).precision)
        }
        if (value !== self.value) {
          self.set(value)
        }
      }
      return input
    }
  },
  methods: {
    format() {
      const { value } = this
      return isString(value) ? value : format(value, options(this))
    }
  },
  watch: {
    // formatted() {
    //   if () {
    //     this.set(this.type === Number ? Number(unformatted) : value)
    //   }
    // }
  }
}
</script>
