import State from "./state"
import concat from "lodash/concat"
import each from "lodash/each"
import isArray from "lodash/isArray"
import remove from "lodash/remove"
import uniqueId from "lodash/uniqueId"

export default {
  props: {
    default: {
      type: [Boolean, Number, Object, String]
    },
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
    type: {
      type: Function,
      default: String,
      validator: function (value) {
        return [Boolean, Date, File, Number, Object, String].indexOf(typeof value) !== -1
      }
    }
  },
  model: {
    state: State.RESETED
  },
  methods: {
    // Value manipulation
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
    // Display
    hide() {
      this.state = this.state | State.HIDDEN
    },
    show() {
      this.state = this.state & ~State.HIDDEN
    },
    // Valid
    valid() {
      this.state = this.state | State.INVALID
    },
    invalid() {
      this.state = this.state & ~State.INVALID
    },
    // Lock
    lock() {
      this.state = this.state | State.LOCKED
    },
    unlock() {
      this.state = this.state & ~State.LOCKED
    },
    // Messages
    appendMessage(message) {
      if (isArray(this.message)) {
        this.messages = []
      }

      if (isArray(message)) {
        each(message, (message) => {
          message.id = `msg-${uniqueId()}`
          concat(this.messages, message)
        })
      } else {
        message.id = `msg-${uniqueId()}`
        concat(this.messages, message)
      }
    },
    removeMessage(message) {
      if (isArray(message)) {
        each(message, (message) => {
          remove(this.message, (m) => {
            return m.id === message.id
          });
        })
      } else {
        remove(this.messages, (m) => {
          return m.id === message.id
        });
      }
    }
  }
}
