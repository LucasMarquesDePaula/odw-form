import {
  Enum
} from "enumify"

class State extends Enum { }

let idx = 0

State.initEnum({
  VALID: 1 << ++idx,
  INVALID: 1 << ++idx,
  CHANGED: 1 << ++idx,
  DIRTY: 1 << ++idx,
  RESETED: 1 << ++idx,
  LOCKED: 1 << ++idx,
  set(state, value) {
    return state | value
  },
  unset(state, value) {
    return state & ~value
  },
  test(state, value) {
    return Boolean(state & value)
  }
})


export default State
