Vue.component('LevelSelector', {
  template: `
    <div class="level-selector" v-bind:class="{ active: active }" @click="onClick" >
      <slot></slot>
    </div>
  `,
  props: {
    active: { type: Boolean, required: false, default: false },
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
})
