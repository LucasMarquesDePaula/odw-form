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

function format(vm, value) {
  if (!value) {
    return value
  }

  const { mask, masked, tokens } = options(vm)
  return masker(value, mask, masked, tokens)
}

export default {
  name: "of-mask",
  extends: Input,
  directives: {
    component
  },
  computed: {
    input() {
      const self = this
      const input = {}

      // :placeholder
      input.placeholder = this.placeholder || this.options.mask

      // @input
      input.input = (event) => {
        if (event.isTrusted) {
          return // ignore native event
        }
        self.set(format(self, event.currentTarget.value))
      }

      return input
    }
  },
  methods: {
    format() {
      return format(this, this.value)
    }
  },
  mounted() {
    this.set(this.format())
  },
  watch: {
    options: {
      handler() {
        this.set(this.format())
      },
      deep: true
    }
  }
}
</script>
