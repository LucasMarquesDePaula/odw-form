<script>
import "eonasdan-bootstrap-datetimepicker"
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css"
import "moment"

import $ from "jquery"
import Input from "./Input"


window.$ = window.jQuery = $

export default {
  name: "of-datetime-picker",
  extends: Input,
  props: {
    addons: {
      default() {
        return {
          right: {
            template: "<i class='fa fa-check'></i>"
          }
        }
      }
    },
    options: {
      default() {
        return {
          locale: "pt-br",
          format: "DD/MM/YYYY HH:mm"
        }
      }
    }
  },
  mounted() {
    const $dateTimePicker = $(this.$el)
      .find(".input-group")
      .datetimepicker(this.options)

    const format = $dateTimePicker.datetimepicker("format")
    $dateTimePicker.on("dp.change", (event) => {
      this.set(event.date.format(format))
    })
  },
  destroyed() {
    $(this.$el)
      .find(".input-group")
      .off()
      .datetimepicker("destroy")
  },
  watch: {
    options(options) {
      $(this.$el).find(".input-group")
        .datetimepicker({ data: options })
    }
  }
}
</script>