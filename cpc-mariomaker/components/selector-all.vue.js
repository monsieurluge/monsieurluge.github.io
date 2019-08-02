Vue.component('SelectorAll', {
  template: `
    <TooltipRight :label="fullLabel" >
      <LevelSelector :active="active" @clicked="onClick">
        <IconAll />
      </LevelSelector>
    </TooltipRight>
  `,
  props: {
    active: { type: Boolean, required: true },
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
