import clone from "lodash/clone"
import concat from "lodash/concat"
import each from "lodash/each"
import isArray from "lodash/isArray"
import remove from "lodash/remove"
import uniqueId from "lodash/uniqueId"

export default function Messages() {
  return {
    messages: [],
    get(message) {
      // If it is not a Array set it as one
      if (isArray(this.message)) {
        this.messages = []
      }
      return this.messages
    },
    append(messages) {
      const messagesArray = isArray(messages) ? clone(messages) : new Array(messages)
      const messagesStore = this.getMessages()

      each(messagesArray, (message) => {
        message.id = `msg-${uniqueId()}`
        concat(messagesStore, message)
      })

      return messagesArray
    },
    remove(messages) {
      const messagesArray = isArray(messages) ? clone(messages) : new Array(messages)
      const messagesStore = this.getMessages()

      return remove(messagesStore, (messageStored) => {
        const found = find(messagesArray, (message) => messageStored.id === message.id)
        return Boolean(found)
      })
    },
    clear() {
      return this.removeMessages(this.getMessages())
    },
    isEmpty() {
      return !this.messages.length
    }
  }
}
