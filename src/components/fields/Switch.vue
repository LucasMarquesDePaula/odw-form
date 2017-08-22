<template>
  <div class="form-group">
    <of-label :text="label" />
    <input type="checkbox">
  </div>
</template>

<script>
import "bootstrap-switch/dist/js/bootstrap-switch.min.js"
import "bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css"

import $ from "jquery"

import Field from "../Field"
import Label from "../Label"

import merge from "../utils/merge.js"

function $switch(vm) {
  return $(vm.$el).find("input")
}

// function check(vm) {
//   if (vm.value) {
//     $switch(vm).attr("checked", "checked")
//   } else {
//     $switch(vm).removeAttr("checked")
//   }
// }

function options(vm) {
  return merge(
    {
      onText: "Sim",
      offText: "Não",
      size: "mini"
    },
    ["animate", "baseClass", "disabled", "handleWidth", "indeterminate", "inverse", "labelText", "labelWidth", "offColor", "offText", "onColor", "onInit", "onSwitchChange", "onText", "radioAllOff", "readonly", "size", "state", "wrapperClass"],
    vm.options
  )
}

export default {
  name: "of-switch",
  components: {
    [Label.name]: Label
  },
  extends: Field,
  props: {
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
  methods: {
    focus() {
      this.$el.getElementsByTagName("select")[0].focus()
    }
  },
  destroyed() {
    $switch(this)
      .off()
      .bootstrapSwitch("destroy")
  },
  mounted() {
    const self = this
    $switch(self)
      .bootstrapSwitch(options(self))
      .bootstrapSwitch("state", Boolean(self.value), true)
      .on("switchChange.bootstrapSwitch", (event, state) => {
        self.set(state)
      })
  },
  watch: {
    value() {
      $switch(this)
        .bootstrapSwitch("state", Boolean(this.value), true)
    }
  }
}
</script>