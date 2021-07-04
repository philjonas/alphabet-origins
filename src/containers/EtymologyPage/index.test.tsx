import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import { connect, Provider } from "react-redux"
import { StateType } from '../../store/types'
import { setId } from "../../store/actions"
import { initialState } from '../../store/reducers'
import { EtymologyPageTemplate } from '.'

Enzyme.configure({ adapter: new Adapter() })
const mockStore = configureMockStore();

const mapDispatchToProps = {
  setId
}

const mapStateToProps = (state: StateType) => {
  const { id, logograms } = state
  return { logo: logograms.find(x => x.id === id) }
}

describe('EtymologyPage', () => {
  let wrapper: any;
  let store;

  beforeEach(() => {
    store = mockStore(initialState)
    const EtymologyPage = connect(mapStateToProps, mapDispatchToProps)(EtymologyPageTemplate)
    wrapper = shallow(
      <Provider store={store}>
        <EtymologyPage />
      </Provider>
    );
  });

  test('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})