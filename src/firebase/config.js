import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

const firebaseConfig = {
    apiKey: "AIzaSyBy2CWSJEHRAlXkVXSg12OW_TxnXXzfW-M",
    authDomain: "vue-firebase-fb04e.firebaseapp.com",
    projectId: "vue-firebase-fb04e",
    storageBucket: "vue-firebase-fb04e.appspot.com",
    messagingSenderId: "334795241898",
    appId: "1:334795241898:web:266245cb367003df1693d3"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp, projectAuth}