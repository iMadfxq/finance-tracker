import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCYQCEYKIPDEZm_v40cnKOOSjEU6RvwPhI",
  authDomain: "financetracker-82ac3.firebaseapp.com",
  projectId: "financetracker-82ac3",
  storageBucket: "financetracker-82ac3.appspot.com",
  messagingSenderId: "702419963858",
  appId: "1:702419963858:web:d775097e3fb32cf5b9020b"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}