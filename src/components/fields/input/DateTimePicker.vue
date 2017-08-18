<script>
import "eonasdan-bootstrap-datetimepicker"
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"

import $ from "jquery"
import Input from "./Input"

import merge from "../../utils/merge.js"
import moment from "moment"

window.$ = window.jQuery = $

function $dateTimePicker(vm) {
  return $(vm.$el).find(".input-group")
}

function options(vm) {
  return merge(
    {
      format: "DD/MM/YYYY HH:mm",
      locale: "pt-br"
    },
    ["format", "dayViewHeaderFormat", "extraFormats", "stepping", "minDate", "maxDate", "useCurrent", "collapse", "locale", "defaultDate", "disabledDates", "enabledDates", "icons", "useStrict", "sideBySide", "daysOfWeekDisabled", "calendarWeeks", "viewMode", "toolbarPlacement", "showTodayButton", "showClear", "showClose", "widgetPositioning", "widgetParent", "keepOpen", "inline", "keepInvalid", "keyBinds", "debug", "ignoreReadonly", "disabledTimeIntervals", "allowInputToggle", "focusOnShow", "enabledHours", "disabledHours", "viewDate", "tooltips"],
    vm.options
  )
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
    options() {
      const self = this
      $dateTimePicker(self)
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