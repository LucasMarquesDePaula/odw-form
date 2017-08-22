<script>
import DateTimePicker from "./DateTimePicker"

export default {
  name: "of-date-picker",
  extends: DateTimePicker,
  props: {
    addOns: {
      default() {
        return {
          left: {
            template: "<i class='fa fa-calendar'></i>"
          }
        }
      }
    },
    options: {
      default() {
        return {
          format: "DD/MM/YYYY"
        }
      }
    }
  }
}
</script>