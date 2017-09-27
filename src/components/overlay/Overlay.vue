<template>
  <div class="overlay">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

// properties
// options
//   duration (default: 400)
//   easing (default: swing)
//   queue (default: true)
//   specialEasing
//   step
//   progress
//   complete
//   start
//   done

import $ from "jquery"

export default {
  name: "of-overlay",
  props: {
    value: {
      type: Boolean,
      required: true
    },
    isDismissible: {
      type: Boolean,
      default: false
    },
    txIn: {
      type: Object,
      default() {
        return {
          opacity: 1
        }
      }
    },
    txOut: {
      type: Object,
      default() {
        return {
          opacity: 0
        }
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    hide() {
      $(this.$el)
        .animate(this.txOut, this.options)
        .hide(0)
    },
    show() {
      $(this.$el)
        .show(0)
        .animate(this.txIn, this.options)
    }
  },
  mounted() {
    if (this.value) {
      this.show()
    } else {
      this.hide()
    }

    $(this.$el).click(() => {
      if (this.isDismissible) {
        this.$emit("input", false)
      }
    })
  },
  watch: {
    value(value) {
      if (value) {
        this.show()
      } else {
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  >div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

// 	<i v-if="!message" class="fa fa-circle-o-notch fa-spin fa-5x fa-fw" style="position: absolute; top: calc(50% - 42px); left: calc(50% - 32px);"></i>
// 	<span>{{message}}</span>
// </div>
</style>
