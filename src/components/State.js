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
  SELF_CHANGED: 1 << ++idx
})

State.set = (state, value) => state | value

State.unset = (state, value) => state & ~value

State.test = (state, value) => Boolean(state & value)

export default State
