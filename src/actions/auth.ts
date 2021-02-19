import {AuthPayloadType} from '../types/types'

export const setSettings = (payload: AuthPayloadType) => ({
    type: "SET_SETTINGS",
    payload: payload
})