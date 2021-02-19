import {AuthPayloadType} from '../types/reducerTypes'

export const setSettings = (payload: AuthPayloadType) => ({
    type: "SET_SETTINGS",
    payload: payload
})