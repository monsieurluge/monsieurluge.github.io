function createFirestoreApi() {
  firebase.initializeApp({
    apiKey: "AIzaSyCa5JCQSdf6btkOq3ejXZkJ2toChviAjXE",
    appId: "1:781211724051:web:f8ad013cdfa51278",
    authDomain: "cpc-mariomaker.firebaseapp.com",
    databaseURL: "https://cpc-mariomaker.firebaseio.com",
    messagingSenderId: "781211724051",
    projectId: "cpc-mariomaker",
    storageBucket: "cpc-mariomaker.appspot.com"
  })

  return {
    tags: firebase.firestore()
      .collection('tags')
      .get()
      .then(snapshot => new Promise((resolve, reject) => {
        resolve(snapshot.docs.map(doc => doc.data()))
      }))
  }
}
