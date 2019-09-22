function createApp(api) {
  return new Vue({
    template: `
      <div class="app-content">
        <AppHeader />

        <Levels />
      </div>
    `,
    data () {
      return {
        levelsStore: levelsStore,
        userStore: userStore
      }
    },
    created () {
      api.levels.then(data => this.levelsStore.setLevels(data))

      api.userLevels.then(data => {
        this.userStore.setLevels(data)
      //   data.done.forEach(id => this.levelsStore.addProperty({ id, property: 'done' }))
      //   data.favorites.forEach(id => this.levelsStore.addProperty({ id, property: 'favorite' }))
      //   data.mine.forEach(id => this.levelsStore.addProperty({ id, property: 'mine' }))
      })
    }
  })
}
