 <template>
    <label :style="style">
        {{text}}
    </label>
</template>

<script>
import isFunction from "lodash/isFunction"
export default {
  props: {
    text: {
      type: [String, Function],
      default: ""
    },
    align: {
      type: [String, Function],
      default: "left"
    }
  },
  computed: {
    style() {
      const style = {}
      style["text-align"] = isFunction(this.align) ? this.align(this) : this.align
      return style
    }
  }
}
</script>