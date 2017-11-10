<template>
  <div class="form-group">
    <of-label v-if="label" :text="label"></of-label>
    <select :multiple="isMultiple" :readonly="select.readonly || false" class="form-control input-sm" />
  </div>
</template>

<script>
import Field from "../../Field"
import Label from "../../Label"

import destroy from "./destroy"
import make from "./make"
import setValue from "./setValue"

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
      // console.log(this.name, "watch.options")
      if (!this.SELF_CHANGED) {
        try {
          destroy(this)
        } catch (error) {
          // silence is golden
        } finally {
          make(this)
        }
      } else {
        this.SELF_CHANGED = false
      }
    },
    value(newValue, oldValue) {
      // console.log(this.name, "watch.value", this.SELF_CHANGED)

      if (!this.SELF_CHANGED) {
        setValue(this)
        // selectize.setValue(value, true)
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


<style lang="scss">
.form-group {
  div.selectize-input {
    min-height: auto;
    padding: 4px 12px;
    border-radius: 0px;
  }

  .selectize-control.single,
  .selectize-control.multi {
    .selectize-input .item {
      background-color: #eeeeee;
      padding: 1px 7px;
      border-radius: 3px;
    }
  }

  &.hidden {
    display: none;
  }
}
</style>