Vue.component('SelectorFavs', {
  template: `
    <IconToggle icon="star-full" label="favoris" :active="active" @clicked="onClick" />
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
