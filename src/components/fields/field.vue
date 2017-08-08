<script>
import State from "./state"
import clone from "lodash/clone"
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
    locked: {
      type: Boolean,
      default: false
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
      this.value = isArray(value) ? clone(value) : new Array(value)
      this.state = dirty ? State.set(this.state, State.DIRTY) : State.unset(this.state, State.CHANGED)
    },
    get() {
      // return this.vuex ? this.state[this.name] : this.value
      return clone(this.value)
    },
    reset() {
      this.state = State.set(this.state, State.RESETED)
      this.state = State.unset(this.state, State.CHANGED)
      this.set(this.value, false)
    },
    // Display
    hide() {
      this.state = State.set(this.state, State.HIDDEN)
    },
    show() {
      this.state = State.unset(this.state, State.HIDDEN)
    },
    // Valid
    valid() {
      this.state = State.set(this.state, State.VALID)
      this.state = State.unset(this.state, State.UNVALID)
    },
    invalid() {
      this.state = State.unset(this.state, State.VALID)
      this.state = State.set(this.state, State.UNVALID)
    },
    // Lock
    lock() {
      this.state = State.set(this.state, State.LOCKED)
    },
    unlock() {
      this.state = State.unset(this.state, State.LOCKED)
    },
    // Messages
    getMessages(message) {
      // If it is not a Array set it as one
      if (isArray(this.message)) {
        this.messages = []
      }
      return this.messages
    },
    appendMessages(messages) {
      const messagesArray = isArray(messages) ? clone(messages) : new Array(messages)
      const messagesStore = this.getMessages()

      each(messagesArray, (message) => {
        message.id = `msg-${uniqueId()}`
        concat(messagesStore, message)
      })

      return messagesArray
    },
    removeMessages(messages) {
      const messagesArray = isArray(messages) ? clone(messages) : new Array(messages)
      const messagesStore = this.getMessages()

      return remove(messagesStore, (messageStored) => {
        const found = find(messagesArray, (message) => messageStored.id === message.id)
        return Boolean(found)
      })
    },
    clearMessages() {
      return this.removeMessages(this.getMessages())
    }
  }
}
</script>
