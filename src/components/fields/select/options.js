import merge from "../../utils/merge.js"
export default (vm) => merge(
  {
    closeAfterSelect: vm.isMultiple === false,
    placeholder: vm.placeholder,
    valueField: "id",
    labelField: "text"
  },
  ["addPrecedence", "allowEmptyOption", "closeAfterSelect", "copyClassesToDropdown", "create", "createFilter", "createOnBlur", "dataAttr", "delimiter", "diacritics", "disabledField", "dropdownParent", "hideSelected", "highlight", "items", "labelField", "load", "loadThrottle", "loadingClass", "lockOptgroupOrder", "maxItems", "maxOptions", "onBlur", "onChange", "onClear", "onDelete", "onDropdownClose", "onDropdownOpen", "onFocus", "onInitialize", "onItemAdd", "onItemRemove", "onLoad", "onOptionAdd", "onOptionRemove", "openOnFocus", "optgroupField", "optgroupLabelField", "optgroupValueField", "optgroups", "options", "persist", "placeholder", "preload", "render", "score", "scrollDuration", "searchConjunction", "searchField", "selectOnTab", "sortField", "valueField"],
  vm.options
)

