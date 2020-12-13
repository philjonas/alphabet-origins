import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import { connect, Provider } from "react-redux"
import { StateType } from '../../store/types'
import { initialState } from '../../store/reducers'
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
