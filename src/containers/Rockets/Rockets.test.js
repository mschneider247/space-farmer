import React from 'react';
import { shallow } from 'enzyme';
import { Rockets, mapDispatchToProps, mapStateToProps } from './Rockets';
import { addDestination } from '../../actions';

describe('Rockets container', () => {
  const proposals = [{ id: 1 }, { id: 2 }];
  const addDestination = jest.fn();
  const addRocketChoice = jest.fn();
  const wrapper = shallow(<Rockets proposals={proposals} addDestination={addDestination} addRocketChoice={addRocketChoice}/>)

  it('Rockets should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call addDestination when the first input is clicked', () => {
    wrapper.find('input').first().simulate('click');
    expect(addDestination).toHaveBeenCalled();
  });

  it('Should return the correct state when handleDestination is called', () => {
    const expectedState = {
      destination: 'mars',
      rocketChoice: '',
    };
    wrapper.instance().handleDestination('mars');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('Should return the correct state when handleRocket is called', () => {
    const expectedState = {
      destination: 'mars',
      rocketChoice: 'Big Rocket',
    };
    wrapper.instance().handleRocket({ name: 'Big Rocket' });
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('Should call createRockets to iterate over rockets', () => {
    const returnedValue = wrapper.instance().createRockets([]);
    const expected = [];
    expect(returnedValue).toEqual(expected);
  });
});

describe('Rockets mapDispatchToProps', () => {
  it('Should dispatch destination through addDestination', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addDestination('moon');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addDestination('moon');
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('Rockets mapStateToProps', () => {
  it('Should access proposals in the Redux store', () => {
    const mockState = {
      proposals: { id: 1 },
    };
    const expected = { proposals: { id: 1 } };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('Should access rockets in the Redux store', () => {
    const mockState = {
      rockets: { name: 'rocket-thing' },
    };
    const expected = { rockets: { name: 'rocket-thing' } };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
