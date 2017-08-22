<template>
  <div>
    <div v-for="(number, index) in numbers" :key="index">
      <of-number v-model="number.model" :name="`number-${index}`" :label="number.label" :type="number.type" :options="number.options" /> {{number.model}}
    </div>
  </div>
</template>

<script>
import Number from "@/components/fields/input/number/Number"

const numbers = [
  { label: "Number", model: 12345, type: window.Number, options: { decimal: ",", thousands: ".", prefix: "R$ ", suffix: " #", precision: 2 } },
  { label: "String", model: 12345, options: { decimal: ",", thousands: ".", prefix: "R$ ", suffix: " #", precision: 2 } }
]

export default {
  name: "Number",
  components: {
    [Number.name]: Number
  },
  data() {
    return {
      numbers
    }
  }
}
</script>