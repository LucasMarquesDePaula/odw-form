<template>
  <div class="form-group" :class="{ hidden: isHidden }">
    <of-label v-if="label" :text="label"></of-label>
    <div class="input-group" :class="inputGroup.class">
      <of-add-on v-if="addOns && addOns.left" :html="addOns.left"></of-add-on>
      <input :placeholder="input.placeholder" :readonly="input.readonly || false" :type="input.type" :value="formatted" @change="(event) => input.change && input.change(event)" @click="(event) => input.click && input.click(event)" @focus="(event) => input.focus && input.focus(event)" @focusout="(event) => input.focusout && input.focusout(event)" @input="(event) => input.input && input.input(event)" v-component="options" class="form-control input-sm" />
      <of-add-on v-if="addOns && addOns.right" :html="addOns.right"></of-add-on>
    </div>
  </div>
</template>

<script>
import AddOn from "./AddOn"
import Field from "../../Field"
import Label from "../../Label"
import State from "../../State"

export default {
  name: "of-input",
  components: {
    [AddOn.name]: AddOn,
    [Label.name]: Label
  },
  extends: Field,
  directives: {
    component(el, binding) {
      // silence is golden
    }
  },
  props: {
    addOns: {
      type: [Object],
      default() {
        return {}
      }
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    isSecret: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    input() {
      const self = this
      const input = {}

      // :placeholder
      input.placeholder = this.placeholder

      // :type
      input.type = this.isHidden ? "hidden"
        : this.isSecret ? "password"
          : this.type === Date ? "date"
            : this.type === Number ? "number"
              : "text"

      // :readonly
      input.readonly = this.isLocked

      // @input
      input.input = (event) => {
        self.set(event.currentTarget.value)
      }

      return input
    },
    inputGroup() {
      const inputGroup = {}

      inputGroup.class = {
        "has-success": State.test(this.state, State.VALID),
        "has-warning": !this.messages.isEmpty(),
        "has-error": State.test(this.state, State.INVALID)
      }

      return inputGroup
    }
  },
  methods: {
    focus() {
      this.$el.getElementsByTagName("input")[0].focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  .input-group {
    width: 100%;
  }

  &.hidden {
    display: none;
  }
}
</style>
