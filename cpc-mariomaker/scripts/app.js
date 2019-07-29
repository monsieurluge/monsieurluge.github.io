function createApp(api) {
  return new Vue({
    data () {
      return {
        title: 'Mario Maker',
        gameVersion: 2,
        subtitle: 'Les niveaux de la communauté CanardPC',
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
