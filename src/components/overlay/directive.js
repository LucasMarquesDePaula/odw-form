export default (el, binding, vnode, oldVnode) => {
  // let { inTx, outTx } = binding.value

}


// const x = {
//   mixins: [
//     require("vue-mixins/setCss"),
//     require("vue-mixins/onDocument"),
//     require("vue-mixins/getViewportSize")
//   ],
//   computed: {
//     zIndex() {
//       if (this.lastItem) {
//         return this.lastItem.zIndex
//       }
//       return 995
//     },
//     color() {
//       if (this.lastItem && this.lastItem.color) {
//         return this.lastItem.color
//       }
//       return "black"
//     },
//     opacity() {
//       if (this.lastItem) {
//         if (this.lastItem.opacity != null) {
//           return this.lastItem.opacity
//         }
//         return 0.5
//       }
//       return 0
//     },
//     dismissable() {
//       if (this.lastItem && this.lastItem.dismissable) {
//         return this.lastItem.dismissable
//       }
//       return true
//     },
//     lastItem() {
//       if (this.stack.length > 0) {
//         const li = this.stack[this.stack.length - 1]
//         this.updateScroll(li)
//         this.updateKeyListener(true)
//         return li
//       }
//       this.updateScroll()
//       this.updateKeyListener()
//       return null
//     }
//   },
//   data() {
//     return {
//       stack: []
//     }
//   },
//   methods: {
//     fade({ el, opacity, cb }) {
//       this.setCss(el, "opacity", opacity)
//       return cb()
//     },
//     dismiss(e) {
//       if (e && !e.defaultPrevented) {
//         if (this.dismissable) {
//           if (e.type === "keyup" && e.which !== 27) {
//             return void
//           }
//           this.close()
//           return e.preventDefault()
//         }
//       }
//     },
//     updateKeyListener(set) {
//       if (set && !this.removeListener) {
//         if (!this.removeListener) {
//           return this.removeListener = this.onDocument("keyup", this.dismiss)
//         }
//         return void
//       }

//       if (typeof this.removeListener === "function") {
//         this.removeListener()
//       }
//       return this.removeListener
//     },
//     updateScroll(options) {
//       const style = { o: null, m: null }
//       if (options && !options.allowScroll) {
//         if (this.scrollDisabled) {
//           return void 
//         }

//         style.o = "hidden"
//         style.m = `${this.getViewportSize().width - document.documentElement.clientWidth}px`
//         this.scrollDisabled = true
//       } else {
//         this.scrollDisabled = false
//       }
//       this.setCss(document.documentElement, "overflow", style.o)
//       return this.setCss(document.documentElement, "margin-right", style.m)
//     },
//     open(options = {}) {
//       if (this.lastItem) { 
//         document.body.appendChild(this.$el) 
//       }
//       if (typeof options.onBeforeOpen === "function") {
//         options.onBeforeOpen()
//       }

//       const newZIndex = this.zIndex + 5

//       if (options.zIndex  || options.zIndex <= newZIndex) {
//         options.zIndex = newZIndex
//       }

//       this.stack.push(options)

//       this.fade({
//         el: this.$el,
//         opacity: this.opacity,
//         cb() {
//           return (typeof options.onOpened === "function" ? options.onOpened() : undefined)
//         }
//       })
//       return {
//         zIndex: this.zIndex + 1,
//         close(callCbs)  {
//           return this.close(options, Boolean(callCbs))
//         }
//       }
//     },
//     close(options, callCbs) {
//       let index
//       if (options == null) {
//         options = this.lastItem
//       }
//       if (callCbs == null) {
//         callCbs = true
//       }
//       if ((index = this.stack.indexOf(options)) > -1) {
//         this.stack.splice(index, 1)
//         if (callCbs) {
//           if (typeof options.onBeforeClose === "function") {
//             options.onBeforeClose()
//           }
//         }
//         return this.fade({
//           el: this.$el,
//           opacity: this.opacity,
//           cb: () => {
//             if (callCbs) {
//               if (typeof options.onClosed === "function") {
//                 options.onClosed()
//               }
//             }
//             if (this.lastItem == null) { return document.body.removeChild(this.$el) }
//           }
//         })
//       }
//     }
//   }
// }
