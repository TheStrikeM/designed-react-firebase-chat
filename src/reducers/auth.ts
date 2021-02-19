import {AuthReducerType} from '../types/reducerTypes'

const initialState: any = {
    auth: {},
    firestore: {},
    user: {}
}

export default (state = initialState, { type, payload }: AuthReducerType ) => {
    switch (type) {

    case "SET_SETTINGS":
        return { 
            ...state, 
            auth: payload.auth,
            firestore: payload.firestore,
            user: payload.user && payload.user 
        }

    default:
        return state
    }
}
