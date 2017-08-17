<script>
import DateTimePicker from "./DateTimePicker"

export default {
  name: "of-date-picker",
  extends: DateTimePicker,
  props: {
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