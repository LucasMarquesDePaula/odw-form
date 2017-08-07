import {
  Enum
} from "enumify"

class State extends Enum {}

State.initEnum({
  INVALID: 0b00000001,
  CHANGED: 0b00000010,
  RESETED: 0b00000100,
  LOCKED: 0b00010000,
  DIRTY: 0b00001000,
  VALID: 0b00000010
})

export default State
