import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDyRhCBMiQZ5s_oJ3xWjuOOuQgsQ4ZXtxo',
  authDomain: 'exercise-health.firebaseapp.com',
  databaseURL: 'https://exercise-health.firebaseio.com',
  projectId: 'exercise-health',
  storageBucket: 'exercise-health.appspot.com',
  messagingSenderId: '285597102570',
  appId: '1:285597102570:web:d7fad1348f747b62b78293',
  measurementId: 'G-FES4XE9NVH'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
