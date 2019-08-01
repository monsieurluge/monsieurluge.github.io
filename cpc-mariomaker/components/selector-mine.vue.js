Vue.component('SelectorMine', {
  template: `
    <IconTooltip icon="hammer" :label="fullLabel" :active="active" @clicked="onClick" />
  `,
  props: {
    active: { type: Boolean, required: false, default: false },
    total: { type: Number, required: false, default: 0 }
  },
  computed: {
    fullLabel () {
      return 'mes créations'.concat(this.total === 0 ? '' : ` (${this.total})`)
    }
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
})
