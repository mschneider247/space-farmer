import React from 'react';
import { shallow } from 'enzyme';
import { Overview} from './Overview';

describe('Overview Tests', () => {
  const proposals = [{
    key: 1,
    id: 1,
    rocket: { payloads: [{ id: 1, lb: 100 }, { id: 2 }] },
    destination: 1,
    supplies: { supplyWeight: 100 },
  }];
  const addProposalFinalCost = jest.fn();
  const wrapper = shallow(<Overview proposals={proposals} addProposalFinalCost={addProposalFinalCost}/>)
  
  it('Overview should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call addProposalFinalCost when the button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(addProposalFinalCost).toHaveBeenCalled();
  });
});