
import firebase from "firebase/compat"

const firebaseConfig = {
    apiKey: "AIzaSyBmntuOZxZGDb1ytNSURxJX0pTy-ESW2qU",
    authDomain: "fb-clone-33d2d.firebaseapp.com",
    projectId: "fb-clone-33d2d",
    storageBucket: "fb-clone-33d2d.appspot.com",
    messagingSenderId: "29896318726",
    appId: "1:29896318726:web:14a40003ead00a10f00887",
    measurementId: "G-FGWRGG9PMQ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export{auth , provider};
  export default db