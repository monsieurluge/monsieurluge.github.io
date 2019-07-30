Vue.component('SelectorMine', {
  template: `
    <IconToggle icon="user" label="mes créations" :active="active" @clicked="onClick" />
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
