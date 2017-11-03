<template>
  <div>
    <h4>String</h4>
    <of-textarea v-model="string0" name="string0" label="Hidden" :is-hidden="true" />
    <of-textarea v-model="string0" name="string0" label="Password" :options="{ cols: 12, rows: 20 }" />
    <of-textarea v-model="string0" name="string0" label="Locked" :is-locked="true"/> 
  </div>
</template>

<script>
import Textarea from "@/components/fields/Textarea"

export default {
  components: {
    [Textarea.name]: Textarea
  },
  data() {
    return {
      string0: ""
    }
  }
}
</script>