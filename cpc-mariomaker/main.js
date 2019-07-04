const firebaseConfig = {
  apiKey: "AIzaSyCa5JCQSdf6btkOq3ejXZkJ2toChviAjXE",
  authDomain: "cpc-mariomaker.firebaseapp.com",
  databaseURL: "https://cpc-mariomaker.firebaseio.com",
  projectId: "cpc-mariomaker",
  storageBucket: "cpc-mariomaker.appspot.com",
  messagingSenderId: "781211724051",
  appId: "1:781211724051:web:f8ad013cdfa51278"
}

new Vue({
  el: '#app',
  data () {
    return {
      database: undefined,
      title: 'Mario Maker - Les niveaux créés par la communauté CanardPC',
      tags: [ 'test', 'mini', 'expert', 'puzzle' ]
    }
  },
  computed: {
    withDatabase () {
      return this.database
    }
  },
  created () {
    firebase.initializeApp(firebaseConfig)

    this.database = firebase.database()

    this.database
      .ref('tags')
      .on('value', result => console.log(result))
  }
}).$mount('#app')
