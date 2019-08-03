function createApp(api) {
  return new Vue({
    template: `
    <div class="app-content">
        <AppHeader />

        <Levels v-bind:levels="levelsWithUserInfos" />
    </div>
    `,
    data () {
      return {
        levelsState: levelsStore.state,
        userState: userStore.state
      }
    },
    computed: {
      levelsWithUserInfos () {
        return this.levelsState.levels.map(addUserInfos(this.userState.infos))
      }
    },
    created () {
      api.levels.then(levels => {
        levelsStore.setLevels(levels)
      })
      api.userInfos.then(infos => {
        userStore.setInfos(infos)
      })
    }
  })
}
