import {
  fecha
} from "fecha";

export default {

  formatValueToField(value) {
    if (value != null) {
      const dt = this.schema.format ? fecha.parse(value, this.schema.format) : new Date(value)
      return fecha.format(dt, this.getDateFormat())
    }

    return value
  },

  formatValueToModel(formatValue) {
    let model
    if (formatValue != null) {
      const m = fecha.parse(formatValue, this.getDateFormat())
      if (this.schema.format) {
        model = fecha.format(m, this.schema.format)
      } else {
        model = m.valueOf()
      }
    }
    return model
  }
}
