import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import { connect, Provider } from "react-redux"
import { LogogramType, StateType } from '../../store/types'
import { HieroglyphicsTemplate } from '.'

Enzyme.configure({ adapter: new Adapter() })
const mockStore = configureMockStore();

const mapStateToProps = (state: StateType) => {
  const { logograms } = state
  return { logograms }
}

describe('HieroglyphicsHeader', () => {
  let wrapper: any;
  let store;

  beforeEach(() => {
    const initialState: StateType = {
      logograms: [
        {
          id: 2,
          phoenician: "𐤁‎",
          meaning: "house",
          hieroglyph: "𓉐",
          greek: "Ββ",
          latin: "Bb"
        },
      ],
      id: 2,
      letterMappings: {}
    };
    store = mockStore(initialState)
    const HieroglyphicsHeader = connect(mapStateToProps)(HieroglyphicsTemplate)
    wrapper = shallow(
      <Provider store={store}>
        <HieroglyphicsHeader />
      </Provider>
    );
  });

  test('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
