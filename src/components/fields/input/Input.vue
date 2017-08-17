<template>
  <div class="form-group">
    <of-label :text="label"></of-label>
    <div class="input-group" :class="inputGroup.class">
      <of-add-on v-if="addons && addons.left" :html="addons.left"></of-add-on>
      <input :readonly="input.readonly || false" :type="input.type" :value="formatted" @change="(event) => input.change && input.change(event)" @click="(event) => input.click && input.click(event)" @focus="(event) => input.focus && input.focus(event)" @focusout="(event) => input.focusout && input.focusout(event)" class="form-control" />
      <of-add-on v-if="addons && addons.right" :html="addons.right"></of-add-on>
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
  props: {
    addons: {
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

      // type
      input.type = this.isHidden ? "hidden"
        : this.isSecret ? "password"
          : "text"

      // @change
      input.change = (event) => {
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