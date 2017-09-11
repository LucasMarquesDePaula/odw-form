<template>
  <div>
    <h4>Select</h4>
    <of-switch v-model="boolean0" name="boolean0" label="Boolean 0" />
    <of-switch v-model="boolean0" name="boolean0" />
    <i class="fa" :class="{ 'fa-check': boolean0, 'fa-times': !boolean0 }"></i>
  </div>
</template>

<script>
import Switch from "@/components/fields/Switch"

export default {
  components: {
    [Switch.name]: Switch
  },
  data() {
    return {
      boolean0: false
    }
  }
}
</script>