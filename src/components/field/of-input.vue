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
import { Enum } from "enumify"

class State extends Enum { }

State.initEnum({
  INVALID: 0b00000001,
  CHANGED: 0b00000010,
  RESETED: 0b00000100
})

export default {
  props: {
    default: {
      type: [Object, Function],
      default: false
    },
    readyonly: {
      type: [Boolean, Function],
      default: false
    },
    hidden: {
      type: [Boolean, Function],
      default: false
    },
    placeholder: {
      type: [String, Function],
      default: ""
    },
    label: {
      type: [String, Object]
    }
  },
  /*
addon:
        left:
    right: string | object

type:
    Object
    String
    Date
    Boolean
    Number
        length
        precision

multi: boolean

model:

default: <type>|string

readyonly: boolean|function

hidden: boolean|function

placeholder:
    string|function

label:
    position: top|left|bottom|right
    align: left|right
    text: string|function

addon:
    left:
    right: string|object

type:
    Object
    String
    Date
    Boolean
    Number
        length
        precision

multi: boolean

options: undefined

]
*/
  model: {
    value: {
      current: "",
      default: ""
    },
    state: State.RESETED,
    messages: []
  },
  methods: {
    parse() {
      // TODO
    }
  },
  computed: {
    inputClass() {
      // TODO
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
