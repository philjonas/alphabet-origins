import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import { connect, Provider } from "react-redux"
import { StateType } from '../../store/types'
import { setId } from "../../store/actions"
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
      id: 2
    };
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