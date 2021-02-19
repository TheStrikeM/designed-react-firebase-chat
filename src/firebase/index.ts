import {FirebaseConfigType} from '../types/apiTypes'
import {useDispatch} from 'react-redux'
import {setSettings} from '../actions/auth'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

export const connectFirebase = (config: FirebaseConfigType) => {
    
    const dispatch = useDispatch()

    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }

    const auth = firebase.auth()
    const firestore = firebase.firestore()
    
    dispatch(setSettings({auth, firestore}))
}