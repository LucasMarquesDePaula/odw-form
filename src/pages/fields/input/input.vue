<template>
  <div>
    <h4>String</h4>
    <of-input v-model="string0" name="string0" label="String 0" />
    <of-input v-model="string1" name="string1" :label="string0" :is-secret="true" :is-hidden="Boolean(string0)" />
    <h4>Number</h4>
    <of-input v-model="number0" name="number0" label="Number 0" />
    <h4>File</h4>
    <of-input v-model="file0" name="file0" label="File 0" />
    <h4>Date</h4>
    <of-input v-model="date0" name="date0" label="Date 0" />
  </div>
</template>

<script>
import Input from "@/components/fields/input/Input"
// import merge from "lodash/merge"

export default {
  name: "input",
  components: {
    [Input.name]: Input
  },
  data() {
    return {
      string0: "",
      string1: "",
      number0: "",
      file0: "",
      date0: ""
    }
  },
  computed: {
    icon() {
      return {
        template: `<span class='fa fa-${this.string0}'></span>`
      }
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
  },
  watch: {
    "change.string0": function (value, component) {
      this.answer = "Waiting for you to stop typing..."
      this.getAnswer()
    }
  }

}
</script>