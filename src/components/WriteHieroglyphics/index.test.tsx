import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
import { LogogramBox } from '.';


test('matches snapshot', () => {
  const wrapper = shallow(<LogogramBox />)
  expect(toJson(wrapper)).toMatchSnapshot();
})