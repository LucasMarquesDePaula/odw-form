<template>
  <div class="form-group">
    <of-label :text="label"></of-label>
    <select :multiple="isMultiple" :readonly="select.readonly || false" class="form-control" />
  </div>
</template>

<script>
import "select2"
import "select2/dist/css/select2.min.css"

import $ from "jquery"

import Field from "../../Field"
import Label from "../../Label"
import State from "../../State"

import each from "lodash/each"

function $select2(vm) {
  return $(vm.$el).find("select")
}

function options(vm) {
  const options = {
    allowClear: true,
    placeholder: vm.placeholder || vm.label
  }

  if (!vm.options) {
    return options
  }

  const properties = ["ajax", "allowClear", "closeOnSelect", "createTag", "data", "dropdownParent", "insertTag", "maximumInputLength", "minimumResultsForSearch", "placeholder", "selectOnClose", "tags", "templateSelection"]

  each(properties, (property) => {
    const value = vm.options[property]
    if (value) {
      options[property] = vm.options[property]
    }
  })
  return options
}

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
  computed: {
    select() {
      // const self = this
      const select = {}
      return select
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
      this.$el.getElementsByTagName("select")[0].focus()
    }
  },
  mounted() {
    const self = this
    $select2(self)
      .select2(options(self))
      .val(null)
      .trigger("change")
      .on("change", (event) => {
        // console.log(self, $select2(self), event)
        const values = []

        each($select2(self).select2("data"), (value) => {
          try {
            values.push(self.type === Object ? value : self.type(value.id))
          } catch (error) {
            console.warn(error)
          }
        })

        self.set(values)
      })
  }
}
</script>