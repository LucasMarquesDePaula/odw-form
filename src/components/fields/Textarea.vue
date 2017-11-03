<template>
  <div class="form-group" :class="{ hidden: isHidden }">
    <of-label v-if="label" :text="label"></of-label>
    <div class="input-group" :class="inputGroup.class">
      <textarea :placeholder="textarea.placeholder" :readonly="textarea.readonly || false" :cols="textarea.cols" :rows="textarea.rows" :value="formatted" @change="(event) => textarea.change && textarea.change(event)" @click="(event) => textarea.click && textarea.click(event)" @focus="(event) => textarea.focus && textarea.focus(event)" @focusout="(event) => textarea.focusout && textarea.focusout(event)" @input="(event) => textarea.input && textarea.input(event)" v-component="options" class="form-control input-sm" />
    </div>
  </div>
</template>

<script>
import Field from "../Field"
import Label from "../Label"

export default {
  name: "of-textarea",
  components: {
    [Label.name]: Label
  },
  extends: Field,
  directives: {
    component(el, binding) {
      // silence is golden
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    textarea() {
      const self = this
      const textarea = {}
      const { options } = this

      // :placeholder
      textarea.placeholder = this.placeholder

      // :row
      textarea.rows = options.rows

      // :cols
      textarea.cols = options.cols

      // :readonly
      textarea.readonly = this.isLocked

      // @input
      textarea.input = (event, x) => {
        self.set(event.currentTarget.value)
      }

      return textarea
    },
    inputGroup() {
      const inputGroup = {}

      inputGroup.class = {
        // "has-success": State.test(this.state, State.VALID),
        // "has-warning": !this.messages.isEmpty(),
        // "has-error": State.test(this.state, State.INVALID)
      }

      return inputGroup
    }
  },
  methods: {
    focus() {
      this.$el.getElementsByTagName("textarea")[0].focus()
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
