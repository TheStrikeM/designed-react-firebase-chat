import firebase from 'firebase'
import {useSelector} from 'react-redux'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'

class FirebaseMessages {
    
    auth: any
    firestore: any
    user: any

    constructor() {
        const {auth, firestore} = useSelector(({auth}: any) => ({
            auth: auth.auth,
            firestore: auth.firestore
        }))

        const [ user ] = useAuthState(auth)

        this.auth = auth
        this.firestore = firestore
        this.user = user
    }

    useData(): any[] {
        const [messages, loading]: any[] = useCollectionData(
            this.firestore.collection('messages').orderBy('createdAt')
        )

        return [messages, loading]
    }

    async sendMessage(value: string, setValue: Function) {
        this.firestore.collection('messages').add({
            uid: this.user.uid,
            displayName: this.user.displayName,
            photoURL: this.user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        setValue('')
    }
}
