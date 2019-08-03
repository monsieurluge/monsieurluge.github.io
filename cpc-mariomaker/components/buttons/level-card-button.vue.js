Vue.component('LevelCardButton', {
  template: `
    <button class="level-card-button" type="button" @click="onClick">
      <slot></slot>
    </button>
  `,
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
})
