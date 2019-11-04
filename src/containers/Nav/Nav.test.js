import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

it('Nav should match its snapshot', () => {
  const wrapper = shallow(<Nav/>)
  expect(wrapper).toMatchSnapshot();
});