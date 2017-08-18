<script>

import money from "./directive"
import defaults from "./options"
import { format, unformat } from "./utils"

import merge from "../../../utils/merge.js"

import Input from "../Input"


function options(vm) {
  return merge(
    {
      decimal: ",",
      precision: 2,
      prefix: "",
      suffix: "",
      thousands: "."
    },
    ["decimal", "precision", "prefix", "suffix", "thousands"],
    vm.options
  )
}

export default {
  name: "of-money",
  extends: Input,
  directives: {
    component: money
  },
  data() {
    return {
      lastValue: null, // avoid unecessary emit when has no change
      display: this.value
    }
  },
  watch: {
    options() {
      const { mask, masked, tokens } = options(this)
      const value = masker(this.value, mask, masked, tokens)
      // if ((this.isMultiple ? this.get()[0] : this.get()) !== value) {
      this.set(value)
      // }
    },
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        var formatted = format(newValue, this.$props)
        if (formatted !== this.formattedValue) {
          this.formattedValue = formatted
        }
      }
    }
  },
  computed: {
    input() {
      const self = this
      const input = {}

      // :placeholder
      input.placeholder = this.placeholder

      // @input
      input.input = (event) => {
        if (!event.isTrusted) {
          return // ignore native event
        }
        self.set(event.currentTarget.value)
      }

      return input
    }
  }
}
</script>
