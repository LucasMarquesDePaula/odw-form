<template>
  <div>
    <h4>Date</h4>
    <of-datetime-picker v-model="dateTime0" name="dateTime0" label="Date 0"></of-datetime-picker>
    {{dateTime0}}
  </div>
</template>

<script>
import DateTimePicker from "@/components/fields/input/DateTimePicker"

export default {
  name: "datetime-picker",
  components: {
    [DateTimePicker.name]: DateTimePicker
  },
  data() {
    return {
      dateTime0: ""
    }
  }
}
</script>