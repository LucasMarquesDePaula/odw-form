<template>
  <div>
    <h4>String</h4>
    <of-input v-model="string0" name="string0" label="Hidden" :is-hidden="true"/>
    <of-input v-model="string0" name="string0" label="Password" :is-secret="true"/> 
    <of-input v-model="string0" name="string0" label="Locked" :is-locked="true"/> 
    <of-input v-model="string0" name="string0" label="String 0" :add-ons="{ left: icon, right: icon }"/> {{string0}}
    <h4>Number</h4>
    <of-input v-model="number0" name="number0" label="Number 0" :type="Number" :add-ons="{ left: icon, right: icon }" /> {{number0}}
    <h4>Date</h4>
    <of-input v-model="date0" name="date0" label="Date 0" :type="Date" :add-ons="{ left: icon, right: icon }"/> {{date0}}
  </div>
</template>

<script>
import Input from "@/components/fields/input/Input"
import Mask from "@/components/fields/input/mask/Mask"

export default {
  name: "input",
  components: {
    [Input.name]: Input,
    [Mask.name]: Mask
  },
  data() {
    return {
      string0: "star",
      number0: "",
      date0: ""
    }
  },
  computed: {
    icon() {
      return {
        template: `<span class='fa fa-${this.string0}'></span>`
      }
    }
  }
}
</script>