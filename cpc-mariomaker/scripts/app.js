function createApp(api) {
  return new Vue({
    template: `
    <div class="app-content">
        <AppHeader />

        <Levels v-bind:levels="levels" />
    </div>
    `,
    data () {
      return {
        levels: []
      }
    },
    methods: {
      updateLevels (levels) {
        this.levels = levels
      }
    },
    created () {
      api.levels.then(this.updateLevels)
    }
  })
}
