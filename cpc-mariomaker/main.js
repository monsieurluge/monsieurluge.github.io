const firebaseConfig = {
  apiKey: "AIzaSyCa5JCQSdf6btkOq3ejXZkJ2toChviAjXE",
  authDomain: "cpc-mariomaker.firebaseapp.com",
  databaseURL: "https://cpc-mariomaker.firebaseio.com",
  projectId: "cpc-mariomaker",
  storageBucket: "cpc-mariomaker.appspot.com",
  messagingSenderId: "781211724051",
  appId: "1:781211724051:web:f8ad013cdfa51278"
}

const pipe = (...functions) => param => functions.reduce((result, func) => func(result), param);

const snapshotToTags = snapshot => snapshot.docs.map(doc => doc.data())

new Vue({
  el: '#app',
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
    firebase.initializeApp(firebaseConfig)

    firebase.firestore().collection('tags').get().then(
      pipe(snapshotToTags, this.updateTags)
    )
  }
}).$mount('#app')
