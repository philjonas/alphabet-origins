import { ActionType } from './types'
import { SET_ID, SET_SEARCH } from './constants'


export const setId = (payload: number): ActionType => {
    return { type: SET_ID, payload }
}

export const setSearch = (payload: string): ActionType => {
    return { type: SET_SEARCH, payload }
}