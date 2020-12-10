import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { HieroglyphicsTemplate } from '.';
import configureMockStore from 'redux-mock-store';
import { LogogramType, StateType } from '../../store/types';
import { connect, Provider } from "react-redux";

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
      logograms: [],
      id: -1
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
    // const wrapper = shallow(<HieroglyphicsHeader />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
