import {AuthReducerType} from '../types/types'

const initialState: any = {
    auth: {},
    firestore: {},
    user: {}
}

export default (state = initialState, { type, payload }: AuthReducer ) => {
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
