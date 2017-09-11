<template>
  <div class="form-group">
    <of-label :text="label"></of-label>
    <select :multiple="isMultiple" :readonly="select.readonly || false" class="form-control input-sm" />
  </div>
</template>

<script>
import "selectize"
import "selectize/dist/css/selectize.bootstrap3.css"

import $select from "./$select"

import Field from "../../Field"
import Label from "../../Label"
import State from "../../State"

import destroy from "./destroy"
import make from "./make"
import setValue from "./setValue"
import options from "./options"

export default {
  name: "of-select",
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
  data() {
    return {
      changed: false
    }
  },
  computed: {
    select() {
      // const self = this
      const select = {}
      return select
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
      this.$el.getElementsByTagName("select")[0].focus()
    }
  },
  watch: {
    options(newValue, oldValue) {
      console.log(this.name, "watch.options")
      const { selectize } = $select(this).get(0)

      // const value = selectize.getValue()

      // selectize.clearOptions()
      // selectize.addOption(options(this).options)
      // selectize.refreshOptions(false)
      // selectize.setValue(value)
      try {
        destroy(this)
      } catch (error) {
        // silence is golden
      }

      make(this)
    },
    value(newValue, oldValue) {

      console.log(this.name, "watch.value", this.SELF_CHANGED)

      if (!this.SELF_CHANGED) {
        setValue(this)
        // selectize.setValue(value, true)
      } else {
        this.SELF_CHANGED = false
      }
    }
  },
  destroyed() {
    destroy(this)
  },
  mounted() {
    make(this)
  }
}
</script>