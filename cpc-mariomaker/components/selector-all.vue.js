Vue.component('SelectorAll', {
  template: `
    <IconToggle icon="list2" label="tous" :active="active" @clicked="onClick" />
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
