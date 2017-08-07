<template>
    <span class="input-group-addon">
        <component v-if="isComponent" :is="html"></component>
        <div v-else> {{html | innerHTML}} </div>
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