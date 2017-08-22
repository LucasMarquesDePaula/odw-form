<template>
  <div>
    <div class="checkbox">
      <label><input type="checkbox" v-model="masked">Masked</label>
    </div>
    <div v-for="(mask, index) in masks" :key="index">
      <of-mask v-model="mask.model" :name="`mask-${index}`" :label="mask.label" :options="mask.options" /> {{mask.model}}
    </div>
  </div>
</template>

<script>
import Mask from "@/components/fields/input/mask/Mask"

import each from "lodash/each"


const masked = true

const masks = [
  { label: "US ZIP", model: "12345", options: { mask: "#####", masked } },
  { label: "Brazil Zip", model: "87010-230", options: { mask: "#####-###", masked } },
  { label: "Brazil CPF/CNPJ", model: "12345678901", options: { mask: ["###.###.###-##", "##.###.###/####-##"], masked } },
  { label: "US Phone", model: "2025550134", options: { mask: "+1 (###) ###-####", masked } },
  { label: "Brazil Phone", model: "4432211266", options: { mask: ["+55 (##) ####-####", "+55 (##) #####-####"], masked } }
]

export default {
  name: "mask",
  components: {
    [Mask.name]: Mask
  },
  data() {
    return {
      masked,
      masks
    }
  },
  watch: {
    masked() {
      each(this.masks, (mask, index) => {
        mask.options.masked = this.masked
      })
    }
  }
}
</script>