<script>
const types = [Boolean, Date, File, Number, Object, String]
export default {
  props: {
    default: {
      type: types
    },
    value: {
      type: types
    }
  }
}
</script>