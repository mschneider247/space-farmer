import React from 'react';
import { shallow } from 'enzyme';
import { Welcome } from './Welcome';

it('Welcome should match its snapshot', () => {
  const wrapper = shallow(<Welcome/>)
  expect(wrapper).toMatchSnapshot();
});