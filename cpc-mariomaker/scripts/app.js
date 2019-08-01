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
        levels: [],
        userInfos: {
          done: [],
          favs: [],
          mine: []
        }
      }
    },
    computed: {
      levelsWithUserInfos () {
        return this.levels.map(addUserInfos(this.userInfos))
      }
    },
    methods: {
      updateLevels (levels) {
        this.levels = levels
      },
      updateUserInfos (infos) {
        this.userInfos = infos
      }
    },
    created () {
      api.levels.then(this.updateLevels)
      api.userInfos.then(this.updateUserInfos)
    }
  })
}
