import {rootReducer, initialState} from "./reducers"
import { SET_ID } from "./constants"
import { StateType, ActionType } from './types'

describe("rootReducer", () => {
  it("set an ID", () => {
    const expected = 2
    const action:ActionType = { type: SET_ID, payload: expected }
    const state:StateType = rootReducer(undefined, action)
    

    expect(state.id).toStrictEqual(expected)
  })

  it("should return the initial state", () => {
    const voidAction :ActionType = {
      type: '',
      payload:{}
    }
    expect(rootReducer(undefined, voidAction)).toEqual(initialState);
  });
});