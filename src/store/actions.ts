import { ActionType } from './types'
import { SET_ID } from './constants'


export function setId(payload: number): ActionType {
    return { type: SET_ID, payload };
}