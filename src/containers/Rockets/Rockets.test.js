import React from 'react';
import { shallow } from 'enzyme';
import { Rockets } from './Rockets';

describe('Rockets container', () => {
  it('Rockets should match its snapshot', () => {
    const proposals = [{id: 1}, {id: 2}]
    const wrapper = shallow(<Rockets proposals={proposals}/>)
    expect(wrapper).toMatchSnapshot();
  });
})