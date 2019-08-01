Vue.component('SelectorFavs', {
  template: `
    <IconTooltip :icon="icon" :label="fullLabel" :active="active" @clicked="onClick" />
  `,
  data () {
    return {
      iconSelectors: [
        { max: Infinity, iconName: 'cross' },
        { max: 8, iconName: 'star-full' },
        { max: 7, iconName: 'star-half' },
        { max: 0, iconName: 'star-empty' },
      ]
    }
  },
  props: {
    active: { type: Boolean, required: false, default: false },
    total: { type: Number, required: false, default: 0 }
  },
  computed: {
    icon () {
      return this.iconSelectors.reduce(this.selectIconName, 'cross')
    },
    fullLabel () {
      return 'favoris'.concat(this.total === 0 ? '' : ` (${this.total}/8)`)
    }
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    },
    selectIconName (iconName, selector) {
      return this.total <= selector.max ? selector.iconName : iconName
    }
  }
})
