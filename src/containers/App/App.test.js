import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App should match its snapshot', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper).toMatchSnapshot();
});
