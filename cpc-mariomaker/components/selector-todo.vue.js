Vue.component('SelectorTodo', {
  template: `
    <IconToggle icon="checkmark" label="nouveaux" :active="active" @clicked="onClick" />
  `,
  props: {
    active: { type: Boolean, required: false, default: false }
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
})
