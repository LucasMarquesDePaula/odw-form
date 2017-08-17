<template>
  <div>
    <h4>Select</h4>
    <of-select v-model="object0" name="object0" label="Object 0" :options="options" />
    <p>{{object0 | filter}}</p>
    <of-select v-model="object1" name="object1" label="Object 1" :options="options" :is-multiple="true" />
    <p>{{object1 | filter}}</p>
    <of-select v-model="string0" name="string0" label="String 0" :options="options" :type="String" />
    <p>{{string0 | filter}}</p>
    <of-select v-model="string1" name="string1" label="String 1" :options="options" :is-multiple="true" :type="String" />
    <p>{{string1 | filter}}</p>
    <of-select v-model="number0" name="number0" label="Number 0" :options="options" :type="Number" />
    <p>{{number0 | filter}}</p>
  </div>
</template>

<script>
import Select from "@/components/fields/select/Select"

import each from "lodash/each"
import isArray from "lodash/isArray"

const data = [
  { id: "0", text: "Option 0" },
  { id: "1", text: "Option 1" }
]

export default {
  components: {
    [Select.name]: Select
  },
  data() {
    return {
      object0: null,
      object1: null,
      string0: null,
      string1: null,
      number0: null,
      options: {
        data: data
      }
    }
  },
  filters: {
    filter(values) {
      const out = []
      try {
        if (isArray(values)) {
          each(values, (value) => {
            if (value.id) {
              const { id, disabled, text } = value
              out.push(JSON.stringify({ id, disabled, text }))
            } else {
              out.push(JSON.stringify(value))
            }
          })
        } else {
          const value = values
          if (value.id) {
            const { id, disabled, text } = value
            out.push(JSON.stringify({ id, disabled, text }))
          } else {
            out.push(JSON.stringify(value))
          }
        }
      } catch (error) {
        // Silence is golden
      }

      return `${(isArray(values) ? "[" : "")} ${out.join(", ")} ${(isArray(values) ? "]" : "")}`
    }
  }
}
</script>