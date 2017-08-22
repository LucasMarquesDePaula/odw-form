<script>
import DateTimePicker from "./DateTimePicker"

export default {
  name: "of-time-picker",
  extends: DateTimePicker,
  props: {
    addOns: {
      default() {
        return {
          left: {
            template: "<i class='fa fa-clock-o'></i>"
          }
        }
      }
    },
    options: {
      type: Object,
      default() {
        return {
          format: "HH:mm"
        }
      }
    }
  }
}
</script>