import { useSelector } from "react-redux"
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

class FirebaseAuth {

    auth: any

    constructor() {
        const {auth} = useSelector(({auth}: any) => ({
            auth: auth.auth,
        }))

        this.auth = auth
    }

    useFirebaseAuth(): Array<{user: any, loading: any, error: any}> {
        const [ user, loading, error ] = useAuthState(this.auth)
        return [ user, loading, error]
    }
     
    async onLogin() {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await this.auth.signInWithPopup(provider)
        console.log(user)
    }
}

