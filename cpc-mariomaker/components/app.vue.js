const app = new Vue({
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
    firebase.initializeApp({
      apiKey: "AIzaSyCa5JCQSdf6btkOq3ejXZkJ2toChviAjXE",
      appId: "1:781211724051:web:f8ad013cdfa51278",
      authDomain: "cpc-mariomaker.firebaseapp.com",
      databaseURL: "https://cpc-mariomaker.firebaseio.com",
      messagingSenderId: "781211724051",
      projectId: "cpc-mariomaker",
      storageBucket: "cpc-mariomaker.appspot.com"
    })

    firebase.firestore().collection('tags').get().then(
      pipe(snapshotToTags, this.updateTags)
    )
  }
})
