<script>
import Input from "../Input"

import component from "./directive"
import masker from "./masker"
import merge from "../../../utils/merge.js"

import tokens from "./tokens"


function options(vm) {
  return merge({ tokens: tokens },
    ["mask", "masked", "tokens"],
    vm.options)
}

export default {
  name: "of-mask",
  extends: Input,
  directives: {
    component
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
      if ((this.isMultiple ? this.get()[0] : this.get()) !== value) {
        this.set(value)
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
