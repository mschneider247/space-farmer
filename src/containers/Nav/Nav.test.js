import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';


describe('Nav container', () => {
  it('Nav should match its snapshot', () => {
    const wrapper = shallow(<Nav/>)
    expect(wrapper).toMatchSnapshot();
  });
})