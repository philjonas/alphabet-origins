import logograms_data from '../languages/phoenician.json'
import latin_letters_mapping from '../languages/latin_id.json'
import { StateType, ActionType } from './types'
import { SET_ID } from './constants'

export const initialState: StateType = {
    logograms: logograms_data,
    id: -1,
    letterMappings: latin_letters_mapping
};

export const rootReducer = (state: StateType = initialState, action: ActionType): StateType => {
    if (action.type === SET_ID) {
        return Object.assign({}, state, {
            id: action.payload,
        });
    }
    return state
};
