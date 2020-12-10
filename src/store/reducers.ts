import data from '../languages/phoenician.json';
import { StateType, ActionType } from './types'
import { SET_ID } from './constants'

const initialState: StateType = {
    logograms: data,
    id: -1
};

export const rootReducer = (state: StateType = initialState, action: ActionType) => {
    if (action.type === SET_ID) {
        return Object.assign({}, state, {
            id: action.payload,
        });
    }
    return state;
};
