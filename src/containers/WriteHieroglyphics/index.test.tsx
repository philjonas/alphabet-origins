import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import { connect, Provider } from "react-redux"
import { StateType } from '../../store/types'
import { setSearch } from "../../store/actions"
import { initialState } from '../../store/reducers'
import { WriteHieroglyphicsTemplate } from '.'

Enzyme.configure({ adapter: new Adapter() })
const mockStore = configureMockStore();

const mapDispatchToProps = {
  setSearch
}

const mapStateToProps = (state: StateType) => {
  const { letterMappings, logograms, search } = state
  return { letterMappings, logograms, search }
}

describe('WriteHieroglyphics', () => {
  let wrapper: any;
  let store;

  beforeEach(() => {
    store = mockStore(initialState)
    const WriteHieroglyphics = connect(mapStateToProps, mapDispatchToProps)(WriteHieroglyphicsTemplate)
    wrapper = shallow(
      <Provider store={store}>
        <WriteHieroglyphics />
      </Provider>
    );
  });

  test('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})