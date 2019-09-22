function createApp(api) {
  return new Vue({
    template: `
      <div class="app-content">
        <AppHeader />

        <Levels :levels="levels" :userLevels="userLevels" />
      </div>
    `,
    data () {
      return {
        levelsStore: levelsStore,
        userStore: userStore
      }
    },
    computed: {
      levels: () => levelsStore.all(),
      userLevels: () => userStore.levels()
    },
    created () {
      api.levels.then(data => this.levelsStore.setLevels(data))
      api.userLevels.then(data => this.userStore.setLevels(data))
    }
  })
}
