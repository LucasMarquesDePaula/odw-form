<template>
  <div>
    <h4>Time</h4>
    <of-time-picker v-model="time0" name="time0" label="Time 0" />
    <p>{{time0 | time}}</p>
    <of-time-picker v-model="time1" name="time1" label="Time 1" :options="options1" />
    <p>{{time1 | time}}</p>
  </div>
</template>

<script>
import TimePicker from "@/components/fields/input/TimePicker"

export default {
  components: {
    [TimePicker.name]: TimePicker
  },
  data() {
    return {
      time0: null,
      time1: null,
      options1: {
        format: "HH:mm:ss"
      }
    }
  },
  filters: {
    time(time) {
      const value = moment(time)
      return value && value.isValid() ? value.format("DD/MM/YYYY HH:mm:ss") : ""
    }
  }
}
</script>