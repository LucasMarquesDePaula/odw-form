import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: (resolve) => require(["@/pages/Hello"], resolve)
    },
    {
      path: "/field",
      name: "Field",
      component: (resolve) => require(["@/pages/fields/field"], resolve)
    },
    // {
    //   path: "/fields/autocomplete",
    //   name: "Autocomplete",
    //   component: (resolve) => require(["@/pages/fields/input/autocomplete"], resolve)
    // },
    {
      path: "/fields/input",
      name: "Input",
      component: (resolve) => require(["@/pages/fields/input/input"], resolve)
    },
    {
      path: "/fields/date-picker",
      name: "Date Picker",
      component: (resolve) => require(["@/pages/fields/input/datePicker"], resolve)
    },
    {
      path: "/fields/datetime-picker",
      name: "DateTime Picker",
      component: (resolve) => require(["@/pages/fields/input/dateTimePicker"], resolve)
    },
    {
      path: "/fields/select",
      name: "Select",
      component: (resolve) => require(["@/pages/fields/select/select"], resolve)
    },
    {
      path: "/fields/time-picker",
      name: "Time Picker",
      component: (resolve) => require(["@/pages/fields/input/timePicker"], resolve)
    }
  ]
})
