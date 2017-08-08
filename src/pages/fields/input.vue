<template>
  <div>
    Input
  </div>
</template>

<script>
import Field from "@/components/fields/field.vue"

export default {
  name: "field",
  components: {
    "of-field": Field
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      min: 12
    }
  },
  methods: {
    text() {
      return () => `${this.msg} (passed by function)`
    },
    html() {
      return () => this.child
      // `<h1>${this.msg} (passed by function) </h1>`
    },
    child() {
      const { min, msg } = this
      return {
        template: `<span>Digite mais ${min - msg.length} caracteres</span>`
      }
    }
  }
}
</script>