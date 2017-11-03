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
      component: (resolve) =>
        require(["@/pages/fields/input/datePicker"], resolve)
    },
    {
      path: "/fields/datetime-picker",
      name: "DateTime Picker",
      component: (resolve) =>
        require(["@/pages/fields/input/dateTimePicker"], resolve)
    },
    {
      path: "/fields/mask",
      name: "Mask",
      component: (resolve) => require(["@/pages/fields/input/mask"], resolve)
    },
    {
      path: "/fields/number",
      name: "Number",
      component: (resolve) => require(["@/pages/fields/input/number"], resolve)
    },
    {
      path: "/fields/select",
      name: "Select",
      component: (resolve) => require(["@/pages/fields/select"], resolve)
    },
    {
      path: "/fields/switch",
      name: "Switch",
      component: (resolve) => require(["@/pages/fields/switch"], resolve)
    },
    {
      path: "/fields/time-picker",
      name: "Time Picker",
      component: (resolve) =>
        require(["@/pages/fields/input/timePicker"], resolve)
    },
    {
      path: "/textarea",
      name: "Textarea",
      component: (resolve) => require(["@/pages/fields/textarea"], resolve)
    },
    {
      path: "/overlay",
      name: "Overlay",
      component: (resolve) => require(["@/pages/overlay"], resolve)
    }
  ]
})
