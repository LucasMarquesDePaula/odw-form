<template>
  <div>
    <h4>Date</h4>
    <of-date-picker v-model="date0" name="date0" label="Date 0" /> {{date0 | date}}
  </div>
</template>

<script>
import DatePicker from "@/components/fields/input/DatePicker"
import Input from "@/components/fields/input/Input"

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [Input.name]: Input
  },
  data() {
    return {
      date0: null,
      options0: {
      }
    }
  },
  filters: {
    date(date) {
      return moment(date).format("DD/MM/YYYY HH:mm:ss")
    }
  }
}
</script>