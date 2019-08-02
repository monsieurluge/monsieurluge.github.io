Vue.component('Badge', {
  template: `
    <div class="badge-wrapper">
      <slot></slot>
      <div class="badge" v-if="visible" >{{ content }}</div>
    </div>
  `,
  props: {
    max: { type: Number, required: false, default: Infinity },
    value: { type: Number, required: false, default: 0 }
  },
  computed: {
    content () {
      return this.value > this.max ? `${this.max}+` : this.value
    },
    visible () {
      return this.value > 0
    }
  }
})
