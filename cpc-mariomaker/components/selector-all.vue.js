Vue.component('SelectorAll', {
  template: `
    <IconToggle icon="list2" :label="fullLabel" :active="active" @clicked="onClick" />
  `,
  props: {
    active: { type: Boolean, required: false, default: false },
    total: { type: Number, required: true }
  },
  computed: {
    fullLabel () {
      return `tous (${this.total})`
    }
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
})
