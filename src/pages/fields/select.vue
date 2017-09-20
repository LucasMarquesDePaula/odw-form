<template>
  <div>
    <h4>Select</h4>
    <of-select v-model="object0" name="object0" label="Object 0" :options="options0" :is-multiple="true" />
    <p>{{object0 | filter}}</p>
    <of-select v-model="object1" name="object1" label="Object 1" :options="options0" :is-multiple="true" />
    <p>{{object1 | filter}}</p>
    <of-select v-model="string0" name="string0" label="String 0" :options="{ options: object1 }" :type="String" />
    <p>{{string0 | filter}}</p>
    <of-select v-model="string1" name="string1" label="String 1" :options="options0" :is-multiple="true" :type="String" />
    <p>{{string1 | filter}}</p>
    <of-select v-model="string2" name="string2" label="String 2 (Ajax)" :options="options1" :is-multiple="true" :type="String" />
    <p>{{string2 | filter}}</p>
    <of-select v-model="number0" name="number0" label="Number 0" :options="options0" :type="Number" />
    <p>{{number0 | filter}}</p>
    <of-select v-model="number0" name="number1" label="Number 1" :options="options0" :type="Number" />
    <of-input v-model="number0" name="number1" label="Number 1" :type="Number" />
    <p>{{number0 | filter}}</p>
  </div>
</template>

<script>
import Input from "@/components/fields/input/Input"
import Select from "@/components/fields/select/Select"

import each from "lodash/each"
import isArray from "lodash/isArray"

const data = [
  {
    idcanal: 14,
    descricao: "Canal Acougue",
    situacao: "A",
    idpessoa: 2,
    nome: "Canal Acougue",
    id: 14,
    text: "Canal Acougue"
  }, {
    idcanal: 16,
    descricao: "Canal Padaria",
    situacao: "A",
    idpessoa: 2,
    nome: "Canal Padaria",
    id: 16,
    text: "Canal Padaria"
  }, {
    idcanal: 17,
    descricao: "Canal Diretoria",
    situacao: "A",
    idpessoa: 1,
    nome: "Canal Diretoria",
    id: 17,
    text: "Canal Diretoria"
  }, {
    idcanal: 18,
    descricao: "Canal Refeitório",
    situacao: "A",
    idpessoa: 1,
    nome: "Canal Refeitório",
    id: 18,
    text: "Canal Refeitório"
  }, {
    idcanal: 20,
    descricao: "Canal Acougue",
    situacao: "A",
    idpessoa: 25,
    nome: "Canal Acougue",
    id: 20,
    text: "Canal Acougue"
  }, {
    idcanal: 23,
    descricao: "Canal Marketing",
    situacao: "A",
    idpessoa: 25,
    nome: "Canal Marketing",
    id: 23,
    text: "Canal Marketing"
  }, {
    idcanal: 21,
    descricao: "Canal Rotisseria",
    situacao: "A",
    idpessoa: 25,
    nome: "Canal Rotisseria",
    id: 21,
    text: "Canal Rotisseria"
  }, {
    idcanal: 24,
    descricao: "Canal Padaria",
    situacao: "A",
    idpessoa: 25,
    nome: "Canal Padaria",
    id: 24,
    text: "Canal Padaria"
  }, {
    idcanal: 1,
    descricao: "Canal Apresentação",
    situacao: "A",
    idpessoa: 1,
    nome: "Canal Apresentação",
    id: 1,
    text: "Canal Apresentação"
  }, {
    idcanal: 25,
    descricao: "Fila de Atendimento",
    situacao: "A",
    idpessoa: 2,
    nome: "Fila de Atendimento",
    id: 25,
    text: "Fila de Atendimento"
  }, {
    idcanal: 26,
    descricao: "Canal Açougue",
    situacao: "A",
    idpessoa: 29,
    nome: "Canal Açougue",
    id: 26,
    text: "Canal Açougue"
  }, {
    idcanal: 27,
    descricao: "Canal Marketing",
    situacao: "A",
    idpessoa: 29,
    nome: "Canal Marketing",
    id: 27,
    text: "Canal Marketing"
  }
]


// const data = [
//   { situacao: { id: "A", text: "Ativo" }, idcanal: 1, nome: "Canal Apresentação", id: 1, text: "Canal Apresentação", idpessoa: 1, descricao: "Canal Apresentação" },
//   { situacao: { id: "A", text: "Ativo" }, idcanal: 14, nome: "Canal Acougue", id: 14, text: "Canal Acougue", idpessoa: 2, descricao: "Canal Acougue" }
// ]

// const data = [
//   { id: 1, text: "Canal Apresentação" },
//   { id: 14, text: "Canal Acougue" }
// ]

export default {
  components: {
    [Select.name]: Select,
    [Input.name]: Input
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
        options: data
      },
      options1: {
        options: data
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