Vue.component('ButtonFav', {
  template: `
    <LevelCardButton @clicked="onClick">
      <IconFav :state="isOn ? 'full' : 'empty'" />
    </LevelCardButton>
  `,
  props: {
    state: { type: String, required: false, default: 'off' }
  },
  computed: {
    isOn () {
      return this.state === 'on'
    }
  },
  methods: {
    onClick () {
      console.log('FIXME card button click')
    }
  }
})
