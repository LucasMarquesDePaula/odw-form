<script>
import Input from "./Input"

import merge from "../../utils/merge.js"

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

function create(vm) {
  const $picker = $dateTimePicker(vm)

  try {
    $picker.off()
      .datetimepicker("destroy")
  } catch (e) {
    // Silence is golden
  } finally {
    const opts = options(vm)
    const { format } = opts

    $picker.datetimepicker(opts)
      .data("DateTimePicker")
      .date(parseMoment(vm.get(), format))

    $picker.on("dp.change", (event) => {
      const { date } = event
      try {
        if (!date.isValid()) {
          throw new Error("value is not valid")
        }
        vm.set(vm.type === String ? date.format(format) : date.toDate())
      } catch (error) {
        vm.set()
      }
    })
  }
}

function parseMoment(value, format) {
  if (typeof value === "string") {
    return moment(value, format)
  }
  return (value && moment(value)) || null
}

export default {
  name: "of-datetime-picker",
  extends: Input,
  props: {
    addOns: {
      default() {
        return {
          left: {
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

      // :readonly
      input.readonly = this.isLocked

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
      const value = this.get()
      if (value || value === 0) {
        const { format } = options(this)
        const moment = parseMoment(value, format)
        const formatted = moment.isValid() ? moment.format(format) : ""
        return formatted
      }
      return ""
    }
  },
  watch: {
    options: {
      handler() {
        create(this)
      },
      deep: true
    },
    value(value) {
      // console.log(value)
      if (value || value === 0) {
        const { format } = options(this)
        $dateTimePicker(this)
          .data("DateTimePicker")
          .date(parseMoment(value, format).format(format))
      }
    }
  },
  destroyed() {
    try {
      $dateTimePicker(this)
        .off()
        .datetimepicker("destroy")
    } catch (e) {
      // Silence is golden
    }
  },
  mounted() {
    create(this)
  }
}
</script>
