<template>
  <div>
    <of-label></of-label>
    <of-addon>
      <div class="input-group" :class="classes.inputGroup">
        <of-addon :html="addons.left"></of-addon>
        <input type="text" class="form-control" />
        <of-addon :html="addons.right"></of-addon>
      </div>
  </div>
</template>

<script>
import Field from "./field"
import State from "./state"

export default {
  props: {
    addons: {
      type: [Object],
      default: {}
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  mixins: [Field],
  methods: {
    focus () {
      this.$el.getElementsByTagName(this.tagName)[0].focus()
    }
  }
  computed: {
    inputClass () {
      // TODO
      return {
        "has-success": false,
        "has-warning": false,
        "has-error": false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-form-generator .field-input .wrapper {
  width: 100%;
}

.vue-form-generator .field-input input[type="radio"] {
  width: 100%;
}

.vue-form-generator .field-input input[type="color"] {
  width: 60px;
}

.vue-form-generator .field-input input[type="range"] {
  padding: 0;
}

.vue-form-generator .field-input .helper {
  margin: auto 0.5em;
}
</style>
