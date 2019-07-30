Vue.component('SelectorTodo', {
  template: `
    <IconToggle :icon="icon" :label="fullLabel" :active="active" :badge=total @clicked="onClick" />
  `,
  props: {
    active: { type: Boolean, required: false, default: false },
    total: { type: Number, required: false, default: 0 }
  },
  computed: {
    icon () {
      return this.total === 0 ? 'checkmark2' : 'checkmark'
    },
    fullLabel () {
      return 'nouveaux'.concat(this.total === 0 ? '' : ` (${this.total})`)
    }
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
})
