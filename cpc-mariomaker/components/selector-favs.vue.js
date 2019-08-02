Vue.component('SelectorFavs', {
  template: `
    <TooltipRight :label="fullLabel" >
      <LevelSelector :active="active" @clicked="onClick">
        <IconFav :state="iconState" />
      </LevelSelector>
    </TooltipRight>
  `,
  data () {
    return {
      iconSelectors: [
        { max: Infinity, state: 'full' },
        { max: 8, state: 'full' },
        { max: 7, state: 'half' },
        { max: 0, state: 'empty' },
      ]
    }
  },
  props: {
    active: { type: Boolean, required: true },
    total: { type: Number, required: false, default: 0 }
  },
  computed: {
    iconState () {
      return this.iconSelectors.reduce(this.selectIconState, 'full')
    },
    fullLabel () {
      return 'favoris'.concat(this.total === 0 ? '' : ` (${this.total}/8)`)
    }
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    },
    selectIconState (iconState, selector) {
      return this.total <= selector.max ? selector.state : iconState
    }
  }
})
