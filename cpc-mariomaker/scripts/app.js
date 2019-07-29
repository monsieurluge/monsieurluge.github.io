function createApp(api) {
  return new Vue({
    data () {
      return {
        appTitle: 'Mario Maker',
        gameVersion: 2,
        appSubtitle: 'Les niveaux de la communauté CanardPC',
        levels: []
      }
    },
    computed: {
      headerInfos () {
        return { title: this.appTitle, subtitle: this.appSubtitle, version: this.gameVersion }
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
