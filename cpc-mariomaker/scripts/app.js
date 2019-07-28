function createApp(api) {
  return new Vue({
    data () {
      return {
        title: 'Mario Maker',
        gameVersion: 2,
        subtitle: 'Les niveaux de la communauté CanardPC',
        tags: []
      }
    },
    methods: {
      updateTags (tags) {
        this.tags = tags
      }
    },
    created () {
      api.tags.then(this.updateTags)
    }
  })
}
