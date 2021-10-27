import { getDatabase, ref, onValue, set, get, child } from 'firebase/database'
import { app } from './firebase'

const database = getDatabase(app)

function storeHighScore(user, score) {
    if (user != null) {
        const starCountRef = ref(db, 'posts/' + postId + '/starCount')
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            updateStarCount(postElement, data)
        })
    }
}

export function getStudents(user, score) {
    console.log('dddd')
    const db = getDatabase()
    const starCountRef = ref(db, 'students')
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        console.log(data)
        // return data
        // updateStarCount(postElement, data)
    })

    // if (user != null) {

    // const dbRef = ref(database)
    // get(child(dbRef, `students`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         return snapshot.val()
    //         console.log(snapshot.val())
    //     } else {
    //         console.log("No data available")
    //     }
    // }).catch((error) => {
    //     console.error(error)
    // })

    // onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val()
    //     console.log(postElement, data)
    // })
    // }
}
