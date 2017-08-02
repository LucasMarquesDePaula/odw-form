import Label from "@/components/field/of-label.vue"
import Vue from "vue"

// Extend the component to get the constructor, which we can then initialize directly.
const Constructor = Vue.extend(Label)

describe("of-label", () => {
  describe("create", () => {
    it("creation without props. testing default values", () => {
      const comp = new Constructor({
        propsData: {}
      }).$mount()

      expect(comp.$el.style["text-align"])
        .to.equal("left")
    })

    it("align left", () => {
      const align = "left"

      const comp = new Constructor({
        propsData: {
          align: align
        }
      }).$mount()

      expect(comp.$el.style["text-align"])
        .to.equal(align)
    })
  })
})
