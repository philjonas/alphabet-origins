import data from '../languages/phoenician.json';
import { StateType, ActionType } from './types'

const initialState: StateType = {
    logograms: data
};

const rootReducer = (state: StateType = initialState, action: ActionType) => {
    return state;
};

export default rootReducer;