import { setUser } from './setUser';
import { rockets } from './setData';
import { proposals } from './proposals';

describe('setUser reducer', () => {
  it('Should return an initial state', () => {
    const expected = '';
    const result = setUser(undefined, {});
    expect(result).toEqual(expected);
  })

  it ('Should return action.user if action.type is SET_USER_NAME', () => {
    const mockAction = {type: 'SET_USER_NAME', user: 'Steve'};
    const result = setUser('', mockAction);
    expect(result).toEqual('Steve');
  });
})

describe('setData reducer', () => {
  it('Should return an initial state', () => {
    const expected = [];
    const result = rockets(undefined, {});
    expect(result).toEqual(expected)
  })

  it('Should return action.data if action.type is SET_ROCKETS', () => {
    const mockRockets = [{id: 1}, {id: 2}]
    const mockAction = {type: 'SET_ROCKETS', data: mockRockets};
    const result = rockets([], mockAction);
    expect(result).toEqual(mockRockets)
  })
})

describe('proposals reducer', () => {
  it('Should return an initial state', () => {
    const expected = [];
    const result = proposals(undefined, {});
    expect(result).toEqual(expected)
  })

  it('Should return action.proposals when action.type is SET_PROPOSAL', () =>{
    const mockProposal = {id: 1};
    const mockAction = {type: 'SET_PROPOSAL', proposals: mockProposal};
    const result = proposals([], mockAction);
    expect(result).toEqual(mockProposal)
  })

  it('Should add proposal to store when action.type is ADD_PROPOSAL', () =>{
    const mockProposal = {id: 2};
    const mockStore = [{id: 1}, {id: 2}]
    const mockAction = {type: 'ADD_PROPOSAL', proposal: mockProposal};
    const result = proposals([{id: 1}], mockAction);
    expect(result).toEqual(mockStore)
  })

  it('Should add supplies to store when action.type is ADD_SUPPLIES', () =>{
    const mockSupplies = {};
    const mockStore = [{id: 1, supplies: {}}]
    const mockAction = {type: 'ADD_SUPPLIES', supplies: mockSupplies};
    const result = proposals([{id: 1}], mockAction);
    expect(result).toEqual(mockStore);
  })

  it('Should add a rocket to store when action.type is ADD_ROCKET_CHOICE', () =>{
    const mockRocket = {};
    const mockStore = [{id: 1, rocket: {}}]
    const mockAction = {type: 'ADD_ROCKET_CHOICE', rocket: mockRocket};
    const result = proposals([{id: 1}], mockAction);
    expect(result).toEqual(mockStore);
  })

  it('Should add a destination to store when action.type is ADD_DESTINATION', () =>{
    const mockDestination = 'moon';
    const mockStore = [{id: 1, destination: 'moon'}]
    const mockAction = {type: 'ADD_DESTINATION', destination: mockDestination};
    const result = proposals([{id: 1}], mockAction);
    expect(result).toEqual(mockStore);
  })

  it('Should add a finalCost to store when action.type is FINAL_COST', () =>{
    const mockFinalCost = 100;
    const mockStore = [{id: 1, finalCost: 100}]
    const mockAction = {type: 'FINAL_COST', finalCost: mockFinalCost};
    const result = proposals([{id: 1}], mockAction);
    expect(result).toEqual(mockStore);
  })
})