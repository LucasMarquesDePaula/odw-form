<template>
  <div>
    <h4>Date Time</h4>
    <of-datetime-picker v-model="dateTime0" name="dateTime0" label="DateTime 0" /> {{dateTime0 | dateTime}}
    <of-datetime-picker v-model="dateTime1" name="dateTime1" label="DateTime 1" :options="options0"/>
    <of-input v-model="options0.format" name="options0-format" label="Format 1" /> {{dateTime1 | dateTime}}
  </div>
</template>

<script>
import DateTimePicker from "@/components/fields/input/DateTimePicker"
import Input from "@/components/fields/input/Input"
import moment from "moment"

export default {
  components: {
    [DateTimePicker.name]: DateTimePicker,
    [Input.name]: Input
  },
  data() {
    return {
      dateTime0: null,
      options0: {
        format: "DD/MM/YYYY"
      },
      dateTime1: null
    }
  },
  filters: {
    dateTime(date) {
      return moment(date).format("DD/MM/YYYY HH:mm")
    }
  }
}
</script>