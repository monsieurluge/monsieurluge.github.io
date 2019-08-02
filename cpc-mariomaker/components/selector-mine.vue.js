Vue.component('SelectorMine', {
  template: `
    <TooltipRight :label="fullLabel" >
      <LevelSelector :active="active" @clicked="onClick">
        <IconMine />
      </LevelSelector>
    </TooltipRight>
  `,
  props: {
    active: { type: Boolean, required: true },
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
