import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: (resolve) => require(["@/pages/Hello.vue"], resolve)
    },
    {
      path: "/fields/field",
      name: "Field",
      component: (resolve) => require(["@/pages/fields/field.vue"], resolve)
    },
    {
      path: "/fields/input",
      name: "Input",
      component: (resolve) => require(["@/pages/fields/input.vue"], resolve)
    }
  ]
})
