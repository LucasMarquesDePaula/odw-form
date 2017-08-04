<template>
    <span class="input-group-addon">
        <div v-if="isComponent">
            If: <component :is="html"></component>
        </div>
        <div v-else>
            Else: {{html | innerHTML}}
        </div>
    </span>
</template>

<script>
import isFunction from "lodash/isFunction"
import isString from "lodash/isString"

export default {
    props: {
        html: {
            type: [String, Function, Object]
        }
    },
    computed: {
        isComponent () {
            return !(isFunction(this.html) || isString(this.html))
        }
    },
    filters: {
        innerHTML (text) {
            return isFunction(text) ? text() : text
        }
    }
}
</script>