<template>
  <div>
    <input v-model="msg" />
    <of-label :text="msg"></of-label>
    <of-label :text="text()"></of-label>
    <of-addon :html="msg"></of-addon>
    <of-addon :html="html()"></of-addon>
    <of-addon :html="child()"></of-addon>
    <of-addon :html="child()"></of-addon>
  </div>
</template>

<script>
import AddOn from "@/components/fields/input/AddOn"
import Label from "@/components/Label"

export default {
  name: "hello",
  components: {
    "of-label": Label,
    "of-addon": AddOn
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

<style>

</style>