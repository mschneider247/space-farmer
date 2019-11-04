import * as actions from './index';

describe('Actions', () => {
  it('should have a type of SET_ROCKETS', () => {
    const data = [{ id: 1 }, { id: 2 }];
    const expected = {
      type: 'SET_ROCKETS',
      data,
    };
    const result = actions.setRockets(data);
    expect(result).toEqual(expected);
  });

  it('should have a type of SET_USER_NAME', () => {
    const user = 'Steve';
    const expected = {
      type: 'SET_USER_NAME',
      user,
    };
    const result = actions.setUser(user);
    expect(result).toEqual(expected);
  });

  it('should have a type of SET_PROPOSAL', () => {
    const proposal = { key: 1, id: 1 };
    const expected = {
      type: 'SET_PROPOSAL',
      proposal,
    };
    const result = actions.setProposal(proposal);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_PROPOSAL', () => {
    const proposal = { key: 1, id: 1 };
    const expected = {
      type: 'ADD_PROPOSAL',
      proposal,
    };
    const result = actions.addProposal(proposal);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_SUPPLIES', () => {
    const supplies = { supplyCost: 100, supplyWeight: 100 };
    const expected = {
      type: 'ADD_SUPPLIES',
      supplies,
    };
    const result = actions.addSupplies(supplies);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_ROCKET_CHOICE', () => {
    const rocket = { id: 1 };
    const expected = {
      type: 'ADD_ROCKET_CHOICE',
      rocket,
    };
    const result = actions.addRocketChoice(rocket);
    expect(result).toEqual(expected);
  });

  it('should have a type of ADD_DESTINATION', () => {
    const destination = 'moon';
    const expected = {
      type: 'ADD_DESTINATION',
      destination,
    };
    const result = actions.addDestination(destination);
    expect(result).toEqual(expected);
  });

  it('should have a type of FINAL_COST', () => {
    const finalCost = 100;
    const expected = {
      type: 'FINAL_COST',
      finalCost,
    };
    const result = actions.addProposalFinalCost(finalCost);
    expect(result).toEqual(expected);
  });
});
