 <template>
  <label :style="style">
    {{text | innerHTML}}
  </label>
</template>

<script>
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
      return isFunction(text) ? text() : text
    }
  }
}
</script>

<style>
label {
  display: block;
}
</style>