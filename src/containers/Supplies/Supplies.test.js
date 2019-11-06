import React from 'react';
import { shallow } from 'enzyme';
import { Supplies, mapDispatchToProps } from './Supplies';
import { addSupplies } from '../../actions'

describe('Supplies container', () => {
  it('Supplies should match its snapshot', () => {
    const wrapper = shallow(<Supplies/>)
    expect(wrapper).toMatchSnapshot();
  });

  it('Should update tractors in state when handleTractor is called', () => {
    const mockState = {
      tractorCost: 10,
      tractorWeight: 10,
      dirtCost: 0,
      dirtWeight: 0,
      hoeCost: 0,
      hoeWeight: 0,
      seedCost: 0,
      seedWeight: 0,
    }
    const wrapper = shallow(<Supplies/>)
    wrapper.instance().handleTractor(10, 10)
    expect(wrapper.state()).toEqual(mockState)
  });

  it('Should update dirt in state when handleDirt is called', () => {
    const mockState = {
      tractorCost: 0,
      tractorWeight: 0,
      dirtCost: 10,
      dirtWeight: 10,
      hoeCost: 0,
      hoeWeight: 0,
      seedCost: 0,
      seedWeight: 0,
    };
    const wrapper = shallow(<Supplies/>);
    wrapper.instance().handleDirt(10, 10);
    expect(wrapper.state()).toEqual(mockState);
  });

  it('Should update hoes in state when handleHoe is called', () => {
    const mockState = {
      tractorCost: 0,
      tractorWeight: 0,
      dirtCost: 0,
      dirtWeight: 0,
      hoeCost: 10,
      hoeWeight: 10,
      seedCost: 0,
      seedWeight: 0,
    };
    const wrapper = shallow(<Supplies/>);
    wrapper.instance().handleHoe(10, 10);
    expect(wrapper.state()).toEqual(mockState);
  });

  it('Should update seeds in state when handleSeed is called', () => {
    const mockState = {
      tractorCost: 0,
      tractorWeight: 0,
      dirtCost: 0,
      dirtWeight: 0,
      hoeCost: 0,
      hoeWeight: 0,
      seedCost: 10,
      seedWeight: 10,
    };
    const wrapper = shallow(<Supplies/>);
    wrapper.instance().handleSeed(10, 10);
    expect(wrapper.state()).toEqual(mockState);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with addSupplies action when addSupplies is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addSupplies({});
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addSupplies({});
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});