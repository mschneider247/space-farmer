import React from 'react';
import { shallow } from 'enzyme';
import { Supplies } from './Supplies';

describe('Supplies container', () => {
  it('Supplies should match its snapshot', () => {
    const wrapper = shallow(<Supplies/>)
    expect(wrapper).toMatchSnapshot();
  });
})