import $ from "jquery"

import DatePicker from "@/components/fields/input/DatePicker"
import DateTimePicker from "@/components/fields/input/DateTimePicker"
import Input from "@/components/fields/input/Input"
import Mask from "@/components/fields/input/mask/Mask"
import Select from "@/components/fields/Select"
import Switch from "@/components/fields/Switch"
import TimePicker from "@/components/fields/input/TimePicker"

import moment from "moment"

function install(Vue) {
  const components = [
    DatePicker,
    DateTimePicker,
    Input,
    Mask,
    Select,
    Switch,
    TimePicker
  ]

  components.forEach((component) => {
    // window[component.name] = 
    Vue.component(component.name, component)
  })
}

export default install

// Install by default if included from script tag
if (typeof window !== "undefined") {
  console.log(window, $, moment)
  window.$ = window.jQuery = $
  window.moment = moment
  if (window.Vue) {
    window.Vue.use(install)
  }
}
