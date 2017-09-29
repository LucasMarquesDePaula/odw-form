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

  $picker.datetimepicker(options(vm))

  try {
    $picker.off()
      .datetimepicker("destroy")
  } finally {
    $picker.datetimepicker(options(vm))
      .on("dp.change", (event) => {
        const { date } = event
        try {
          if (!date.isValid()) {
            throw new Error("value is not valid")
          }
          vm.set(date.toDate())
        } catch (error) {
          vm.set()
        }
      })
  }
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
      const formatted = moment(this.value)
      return formatted && formatted.isValid() ? formatted.format(options(this).format) : ""
    }
  },
  watch: {
    options: {
      handler() {
        create(this)
      },
      deep: true
    }
  },
  destroyed() {
    $dateTimePicker(this)
      .off()
      .datetimepicker("destroy")
  },
  mounted() {
    create(this)
  }
}
</script>