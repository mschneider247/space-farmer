import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import falcon1 from '../../images/falcon1.jpg';
import { setRockets } from '../../actions';

describe('App container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('App should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should return the correct image when getRocketImage is called', () => {
    const rocketId = 1
    expect(wrapper.instance().getRocketImage(rocketId)).toEqual(falcon1)
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with a setRockets action when setRockets is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setRockets([{id: 1},{id: 2}]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setRockets([{id: 1},{id: 2}]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
