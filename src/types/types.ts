export type AuthPayloadType = {
    auth: any, 
    firestore: any, 
    user?: {}
}

export type AuthReducerType = { 
    type: string, 
    payload: AuthPayloadType 
}