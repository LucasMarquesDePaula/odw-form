<template>
  <div>
    <h4>Select</h4>
    <of-select v-model="object0" name="object0" label="Object 0" :options="options0" />
    <p>{{object0 | filter}}</p>
    <of-select v-model="object1" name="object1" label="Object 1" :options="options0" :is-multiple="true" />
    <p>{{object1 | filter}}</p>
    <of-select v-model="string0" name="string0" label="String 0" :options="options0" :type="String" />
    <p>{{string0 | filter}}</p>
    <of-select v-model="string1" name="string1" label="String 1" :options="options0" :is-multiple="true" :type="String" />
    <p>{{string1 | filter}}</p>
    <of-select v-model="string2" name="string2" label="String 2 (Ajax)" :options="options1" :is-multiple="true" :type="String" />
    <p>{{string2 | filter}}</p>
    <of-select v-model="number0" name="number0" label="Number 0" :options="options0" :type="Number" />
    <p>{{number0 | filter}}</p>
  </div>
</template>

<script>
import Select from "@/components/fields/Select"

import each from "lodash/each"
import isArray from "lodash/isArray"

const data = [
  { id: "0", text: "Option 0" },
  { id: "1", text: "Option 1" },
  { id: "2", text: "Option 2" },
  { id: "3", text: "Option 3" }
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
      string2: null,
      number0: null,
      options0: {
        data: data
      },
      options1: {
        ajax: {
          url: "https://api.github.com/search/repositories",
          dataType: "json",
          delay: 250,
          data: function (parameters) {
            return {
              q: parameters.term,
              page: parameters.page
            }
          },
          processResults: function (data, page) {
            return {
              results: data.items
            }
          },
          cache: true,
          templateResult
        },
        escapeMarkup(markup) {
          return markup
        },
        // closeOnSelect: false,
        minimumInputLength: 1,
        templateResult,
        templateSelection
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

function templateSelection(repo) {
  return repo.full_name || repo.text
}

function templateResult(repo) {
  if (repo.loading) {
    return `${repo.text}`
  }

  const markup = []
  markup.push(`
    <div class="clearfix">
      <div class="col-sm-1">
        <img src="${repo.owner.avatar_url}" style="max-width: 100%" />
      </div>
      <div clas="col-sm-10">
        <div class="clearfix">
          <div class="col-sm-6">${repo.full_name}</div>
          <div class="col-sm-3"><i class="fa fa-code-fork"></i>${repo.forks_count}</div>
          <div class="col-sm-2"><i class="fa fa-star"></i>${repo.stargazers_count}</div>
        </div>
    `)

  if (repo.description) {
    markup.push(`
        <div>${repo.description}</div>
    `)
  }

  markup.push(`
      </div>
    </div>
  `)
  return markup.join("")
}
</script>