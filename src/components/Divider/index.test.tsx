import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
import {Divider} from '.';


test('matches snapshot', () => {
  const wrapper = shallow(<Divider />)
  expect(toJson(wrapper)).toMatchSnapshot();
})