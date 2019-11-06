import React from 'react';
import { shallow } from 'enzyme';
import { ProposalContainer, mapDispatchToProps, mapStateToProps } from './ProposalContainer';
import { addProposal } from '../../actions';


describe('Proposal Container', () => {
  it('Proposal Container should match its snapshot', () => {
    const proposals = [{key: 1, id: 1}, {key: 1, id: 2}]
    const wrapper = shallow(<ProposalContainer proposals={proposals}/>)
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ProposalContainer mapDispatchToProps', () => {
  it('Should dispatch proposal when addProposal is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addProposal({ id: 1, key: 1 });
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addProposal({ id: 1, key: 1 });
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('Nav mapStateToProps', () => {
  it('Should access the proposals key in the Redux store', () => {
    const mockState = {
      proposals: [{}],
    };
    const expected = { proposals: [{}] };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
