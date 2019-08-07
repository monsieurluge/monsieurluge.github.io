function createApp(api) {
  return new Vue({
    template: `
      <div class="app-content">
        <AppHeader />

        <Levels />
      </div>
    `,
    created () {
      api.levels.then(levels => levelsStore.setLevels(levels))
      api.userLevels.then(levels => {
        userStore.setLevels(levels)
      })
    }
  })
}
