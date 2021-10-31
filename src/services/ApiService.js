import { getDatabase, ref, onValue, set, get, child } from 'firebase/database'
import { collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore'

import { fireStore } from './firebase'

// const db = getDatabase(app)

// function storeHighScore(user, score) {
//     if (user != null) {
//         const starCountRef = ref(db, 'posts/' + postId + '/starCount')
//         onValue(starCountRef, (snapshot) => {
//             const data = snapshot.val()
//             updateStarCount(postElement, data)
//         })
//     }
// // }



export const createUser = async (user) => {
    await setDoc(doc(fireStore, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber
    }, { merge: true })

}

export const getUsers = async (user, score) => {
    let d = []
    const querySnapshot = await getDocs(collection(fireStore, "users"))
    querySnapshot.forEach((doc) => {
        d.push(doc.data())
    })
    return d
}
