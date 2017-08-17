<script>
import DateTimePicker from "./DateTimePicker"

export default {
  extends: DateTimePicker,
  props: {
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