Vue.component('IconFav', {
  template: `
    <div class="standard-icon icon" v-bind:class="iconName" />
  `,
  data () {
    return {
      states: {
        empty: 'icon-star-empty',
        half: 'icon-star-half',
        full: 'icon-star-full'
      }
    }
  },
  props: {
    state: { type: String, required: false, default: 'empty' }
  },
  computed: {
    iconName () {
      return this.states[this.state] || 'icon-star-empty'
    }
  }
})
