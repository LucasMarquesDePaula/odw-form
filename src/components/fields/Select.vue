<template>
  <div class="form-group">
    <of-label :text="label"></of-label>
    <select :multiple="isMultiple" :readonly="select.readonly || false" class="form-control input-sm" />
  </div>
</template>

<script>
import "select2/dist/js/select2.min.js"
import "select2/dist/css/select2.min.css"

import $ from "jquery"

import Field from "../Field"
import Label from "../Label"
import State from "../State"

import each from "lodash/each"
import merge from "../utils/merge.js"

function $select2(vm) {
  return $(vm.$el).find("select")
}

function options(vm) {
  return merge(
    {
      // ajax: {
      //   delay: 250
      // },
      allowClear: true,
      closeOnSelect: vm.isMultiple === false,
      placeholder: vm.placeholder || vm.label,
      width: "100%"
    },
    ["ajax", "amdBase", "amdLanguageBase", "closeOnSelect", "createTag", "data", "debug", "dir", "dropdownAutoWidth", "dropdownParent", "escapeMarkup", "insertTag", "language", "matcher", "maximumInputLength", "maximumSelectionLength", "minimumInputLength", "minimumResultsForSearch", "selectOnClose", "sorter", "tags", "templateResult", "templateSelection", "theme", "width"],
    vm.options
  )
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
  watch: {
    options() {
      // TODO
      // const self = this
      // $dateTimePicker(this)
      //   .datetimepicker({
      //     data: options(value)
      //   })
    },
    value() {
      $select2(this)
        .val(this.value)
        .trigger("change.select2")
    }
  },
  destroyed() {
    $select2(this)
      .off()
      .select2("destroy")
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