import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
import { WriteHieroglyphics } from '.';


test('matches snapshot', () => {
  const wrapper = shallow(<WriteHieroglyphics />)
  expect(toJson(wrapper)).toMatchSnapshot();
})