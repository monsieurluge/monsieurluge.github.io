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
        levels.done.map(id => levelsStore.markLevelAs({ id, state: 'done' }))
        levels.favorites.map(id => levelsStore.markLevelAs({ id, state: 'fav' }))
        levels.mine.map(id => levelsStore.markLevelAs({ id, state: 'mine' }))
      })
    }
  })
}
