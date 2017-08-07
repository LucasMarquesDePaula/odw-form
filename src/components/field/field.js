import {
  Enum
} from "enumify"

class State extends Enum {}

State.initEnum({
  INVALID: 0b00000001,
  CHANGED: 0b00000010,
  RESETED: 0b00000100,
  DIRTY: 0b00001000,
  LOCKED: 0b00010000
})

export default {
  props: {
    // addons: {
    //   type: [Object],
    //   default: {}
    // },
    default: {
      type: [Boolean, Number, Object, String]
    },
    // editable: {
    //   type: [Boolean, Function],
    //   default: false
    // },
    hidden: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    messages: {
      type: Array
    },
    multi: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true,
      validator: function (value) {
        return Boolean(value)
      }
    },
    // placeholder: {
    //   type: String,
    //   default: ""
    // },
    type: {
      type: Function,
      default: String,
      validator: function (value) {
        return [Boolean, Number, Object, String].indexOf(typeof value) !== -1
      }
    }
  },
  model: {
    state: State.RESETED
  },
  methods: {
    set(value, dirty = true) {
      if (dirty) {
        this.state = this.state | State.DIRTY
      }
    },
    get() {
      return this.vuex ? this.state[this.name] : this.value
    },
    reset() {
      this.state = this.state | State.RESETED
      this.state = this.state & ~State.CHANGED
      this.state = this.state & ~State.DIRTY
      this.value = this.default
    },
    focus() {
      this.$el.getElementsByTagName(this.tagName)[0].focus()
    },
    hide() {
      this.state = this.state | State.HIDDEN
    },
    show() {
      this.state = this.state & ~State.HIDDEN
    },
    valid() {
      this.state = this.state | State.INVALID
    },
    invalid() {
      this.state = this.state & ~State.INVALID
    },
    lock() {
      this.state = this.state | State.LOCKED
    },
    unlock() {
      this.state = this.state & ~State.LOCKED
    }
  }
}
