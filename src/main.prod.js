import DatePicker from "@/components/fields/input/DatePicker"
import DateTimePicker from "@/components/fields/input/DateTimePicker"
import Input from "@/components/fields/input/Input"
import Mask from "@/components/fields/input/mask/Mask"
import Number from "@/components/fields/input/number/Number"
import Overlay from "@/components/overlay/Overlay"
import Select from "@/components/fields/select/Select"
import Switch from "@/components/fields/Switch"
import Textarea from "@/components/fields/Textarea"
import TimePicker from "@/components/fields/input/TimePicker"

function install(Vue) {
  const components = [
    DatePicker,
    DateTimePicker,
    Input,
    Mask,
    Number,
    Overlay,
    Select,
    Switch,
    Textarea,
    TimePicker
  ]

  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default install

// Install by default if included from script tag
if (typeof window !== "undefined") {
  if (window.Vue) {
    window.Vue.use(install)
  }
}
