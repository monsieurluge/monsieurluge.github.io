Vue.component('SelectorTodo', {
  template: `
    <TooltipRight :label="fullLabel" >
      <Badge :value="total" max=9>
        <LevelSelector :active="active" @clicked="onClick">
          <IconDone :done="levelsRemaining" />
        </LevelSelector>
      </Badge>
    </TooltipRight>
  `,
  props: {
    active: { type: Boolean, required: true },
    total: { type: Number, required: false, default: 0 }
  },
  computed: {
    levelsRemaining () {
      return this.total > 0
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
