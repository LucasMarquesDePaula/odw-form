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
  },
  data() {
    return {
      formatted: ""
    }
  },
  methods: {
    format() {
      return `${this.value}`
    }
  },
  watch: {
    value(value) {
      this.formatted = this.format()
    }
  }
}
</script>