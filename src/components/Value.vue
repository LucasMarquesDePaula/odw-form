<script>
const types = [Boolean, Date, File, Number, Object, String]
export default {
  props: {
    default: {
      type: types
    },
    value: {
      type: types.concat(Array)
    },
    type: {
      type: Function,
      default: Object,
      validation(type) {
        return types.indexOf(type) !== -1
      }
    }
  },
  data() {
    return {
      formatted: ""
    }
  },
  methods: {
    format() {
      return `${this.value || ""}`
    }
  },
  watch: {
    value(value) {
      this.formatted = this.format()
    }
  },
  created() {
    this.formatted = this.format()
  }
}
</script>