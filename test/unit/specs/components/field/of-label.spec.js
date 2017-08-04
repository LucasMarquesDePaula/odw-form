import {
  isFunction,
  isString
} from "lodash"

import Label from "@/components/field/of-label.vue"
import Vue from "vue"

// Extend the component to get the constructor, which we can then initialize directly.
const Constructor = Vue.extend(Label)

describe("of-label", () => {
  describe("Creation", () => {
    it("Without props. Testing default values", () => {
      // Test if on creation the default values are setted
      const vm = new Constructor().$mount()
      it("align", () => {
        expect(vm.$el.style["text-align"]).to.be("left")
      })
      it("text", () => {
        expect(vm.$el.textContent).to.be("")
      })
    })

    describe("With props. Testing setted values", () => {
      it("align", () => {
        testAlign("left")
        testAlign("right")
      })

      it("text", () => {
        testText("")
        testText("text")
      })
    })

    function testAlign(align) {
      it(`Align ${align} as a String`, () => {
        const vm = new Constructor({
          propsData: {
            align: align
          }
        }).$mount()

        expect(vm.$el.style["text-align"]).to.be(align)
      })

      it(`Align ${align} as a Function`, () => {
        const vm = new Constructor({
          propsData: {
            align: dummy(align)
          }
        }).$mount()

        expect(vm.$el.style["text-align"]).to.be(align)
      })
    }

    function testText(text) {
      it(`Text "${text}" as a String`, () => {
        const vm = new Constructor({
          propsData: {
            text: text
          }
        }).$mount()

        expect(vm.$el.textContent).to.be(text)
      })

      it(`Text "${text}" as a Function`, () => {
        const vm = new Constructor({
          propsData: {
            text: dummy(text)
          }
        }).$mount()

        expect(vm.$el.textContent).to.be(text)
      })
    }
  })

  describe("Setting", () => {
    // align
    testAlign("left")
    testAlign("right")

    // text
    testText("")
    testText("text")

    function testAlign(align) {
      it(`Align "${align}" as a String`, () => {
        const vm = new Constructor().$mount()

        vm.align = align
        // wait a "tick" after state change before asserting DOM updates
        Vue.nextTick(() => {
          expect(isString(vm.align)).to.ok()
          expect(vm.$el.style["text-align"]).to.be(align)
          done()
        })
      })

      it(`Align "${align}" as a Function`, () => {
        const vm = new Constructor().$mount()

        vm.align = dummy(align)
        // wait a "tick" after state change before asserting DOM updates
        Vue.nextTick(() => {
          expect(isFunction(vm.align)).to.ok()
          expect(vm.$el.style["text-align"]).to.be(align)
          done()
        })
      })
    }

    function testText(text) {
      it(`Text "${text}" as a String`, () => {
        const vm = new Constructor().$mount()

        vm.text = text
        // wait a "tick" after state change before asserting DOM updates
        Vue.nextTick(() => {
          expect(isString(vm.text)).to.ok()
          expect(vm.$el.textContent).to.be(text)
          done()
        })
      })

      it(`Text "${text}" as a Function`, () => {
        const vm = new Constructor().$mount()

        vm.text = dummy(text)
        // wait a "tick" after state change before asserting DOM updates
        Vue.nextTick(() => {
          expect(isFunction(vm.text)).to.ok()
          expect(vm.$el.textContent).to.be(text)
          done()
        })
      })
    }
  })
})

function dummy(value) {
  return () => value
}

// import Label from "@/components/field/of-label.vue"
// import Vue from "vue"

// // Extend the component to get the constructor, which we can then initialize directly.
// const Constructor = Vue.extend(Label)

// describe("of-label", () => {
//   describe("create", () => {
//     it("creation without props. testing default values", () => {
//       const comp = new Constructor({
//         propsData: {}
//       }).$mount()

//       expect(comp.$el.style["text-align"])
//         .to.equal("left")
//     })

//     it("align left", () => {
//       const align = "left"

//       const comp = new Constructor({
//         propsData: {
//           align: align
//         }
//       }).$mount()

//       expect(comp.$el.style["text-align"])
//         .to.equal(align)
//     })
//   })
// })
