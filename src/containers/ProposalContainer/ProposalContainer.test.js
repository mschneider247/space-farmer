import React from 'react';
import { shallow } from 'enzyme';
import { ProposalContainer } from './ProposalContainer';


describe('Proposal Container', () => {
  it('Proposal Container should match its snapshot', () => {
    const proposals = [{key: 1, id: 1}, {key: 1, id: 2}]
    const wrapper = shallow(<ProposalContainer proposals={proposals}/>)
    expect(wrapper).toMatchSnapshot();
  });
})