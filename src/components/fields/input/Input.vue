<template>
  <div class="form-group">
    <of-label :text="label"></of-label>
    <div class="input-group" :class="inputGroup.class">
      <of-add-on v-if="addons && addons.left" :html="addons.left"></of-add-on>
      <input :type="input.type" :value="input.value" @change="input.change" class="form-control" />
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
      const input = {}
      // const self = this

      // type
      input.type = this.isHidden ? "hidden"
        : this.isSecret ? "password"
          : "text"

      // value
      try {
        input.value = this.isMultiple ? this.get()[0] : this.get()
      } catch (error) {
        console.warn(error)
      }
      input.value = input.value || ""

      // @change
      input.change = (event) => {
        this.set(event.currentTarget.value)
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
    // formGroup() {
    //   return {
    //     class: {
    //       hidden: this.isHidden
    //     }
    //   }
    // }
  },
  methods: {
    focus() {
      this.$el.getElementsByTagName("input")[0].focus()
    }
  }
}
</script>