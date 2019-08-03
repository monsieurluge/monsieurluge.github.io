Vue.component('ButtonDone', {
  template: `
    <LevelCardButton @clicked="onClick">
      <IconDone :done="isOn" />
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
      console.log('FIXME: done clicked')
    }
  }
})
