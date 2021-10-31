import { FirebaseApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

}

let firebaseApp: FirebaseApp

if (!getApps.length) {
    firebaseApp = initializeApp(firebaseConfig)
}

const fireStore = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp)

export { fireStore, auth, storage }

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDky7QzpdJ4wQ2zhnX_bC7cyB-EXJCfErs",
//     authDomain: "rn-skeleton-cfce8.firebaseapp.com",
//     projectId: "rn-skeleton-cfce8",
//     storageBucket: "rn-skeleton-cfce8.appspot.com",
//     messagingSenderId: "1015840234520",
//     appId: "1:1015840234520:web:c6ce0bae0f706dabd7376d",
//     databaseURL: "https://rn-skeleton-cfce8-default-rtdb.asia-southeast1.firebasedatabase.app"

// }

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig)
