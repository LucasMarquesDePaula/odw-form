 <template>
  <label :style="style">
    {{text | innerHTML}}
  </label>
</template>

<script>
import isFunction from "lodash/isFunction"
export default {
  name: "of-label",
  props: {
    align: {
      type: [String, Function],
      default: "left"
    },
    text: {
      type: [String, Function]
    }
  },
  computed: {
    style () {
      return {
        "text-align": isFunction(this.align) ? this.align(this) : this.align
      }
    }
  },
  filters: {
    innerHTML (text) {
      let html = isFunction(text) ? text() : text
      return html || " "
    }
  }
}
</script>

<style>
label {
  display: block;
}
</style>