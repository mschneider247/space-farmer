import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapDispatchToProps, mapStateToProps } from './Nav';
import { setUser } from '../../actions';


describe('Nav container', () => {
  it('Nav should match its snapshot', () => {
    const wrapper = shallow(<Nav/>)
    expect(wrapper).toMatchSnapshot();
  });
})

describe('Nav mapDispatchToProps', () => {
  it('Should dispatch setUser with a userName', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setUser({ id: 1 });
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser({ id: 1 });
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('Nav mapStateToProps', () => {
  it('Should access the setUser key in the Redux store', () => {
    const mockState = {
      setUser: 'Steve',
    };
    const expected = { user: 'Steve' };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
