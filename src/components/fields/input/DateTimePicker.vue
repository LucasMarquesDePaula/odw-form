<script>
import "eonasdan-bootstrap-datetimepicker"
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"

import $ from "jquery"
import Input from "./Input"
import each from "lodash/each"
import moment from "moment"

window.$ = window.jQuery = $

function $dateTimePicker(vm) {
  return $(vm.$el).find(".input-group")
}

function options(vm) {
  const options = {
    format: "DD/MM/YYYY HH:mm",
    // keepInvalid: true,
    locale: "pt-br"
  }

  if (!vm.options) {
    return options
  }

  const properties = ["format", "dayViewHeaderFormat", "extraFormats", "stepping", "minDate", "maxDate", "useCurrent", "collapse", "locale", "defaultDate", "disabledDates", "enabledDates", "icons", "useStrict", "sideBySide", "daysOfWeekDisabled", "calendarWeeks", "viewMode", "toolbarPlacement", "showTodayButton", "showClear", "showClose", "widgetPositioning", "widgetParent", "keepOpen", "inline", "keepInvalid", "keyBinds", "debug", "ignoreReadonly", "disabledTimeIntervals", "allowInputToggle", "focusOnShow", "enabledHours", "disabledHours", "viewDate", "tooltips"]

  each(properties, (property) => {
    const value = vm.options[property]
    if (value) {
      options[property] = vm.options[property]
    }
  })
  return options
}


export default {
  name: "of-datetime-picker",
  extends: Input,
  props: {
    addons: {
      default() {
        return {
          right: {
            template: "<i class='fa fa-calendar'></i>"
          }
        }
      }
    }
  },
  computed: {
    input() {
      const self = this
      const input = {}

      // @focus
      input.focus = (event) => {
        $dateTimePicker(self)
          .data("DateTimePicker")
          .show()
      }
      return input
    }
  },
  methods: {
    format() {
      const formatted = moment(this.value)
      return formatted && formatted.isValid() ? formatted.format(options(this).format) : ""
    }
  },
  watch: {
    options(options) {
      const self = this
      $dateTimePicker(this)
        .datetimepicker({
          data: options(self)
        })
    }
  },
  destroyed() {
    $dateTimePicker(this)
      .off()
      .datetimepicker("destroy")
  },
  mounted() {
    const self = this
    const $picker = $dateTimePicker(self)

    $picker.datetimepicker(options(self))

    $picker.on("dp.change", (event) => {
      const { date } = event
      try {
        if (!date.isValid()) {
          throw new Error("value is not valid")
        }
        self.set(date.toDate())
      } catch (error) {
        self.set()
      }
    })
  }
}
</script>