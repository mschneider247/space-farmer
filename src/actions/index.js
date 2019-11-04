export const setRockets = data => ({
  type: 'SET_ROCKETS',
  data
})

export const setUser = user => ({
  type: 'SET_USER_NAME',
  user
});

export const setProposal = proposal => ({
  type: 'SET_PROPOSAL',
  proposal
})

export const addProposal = proposal => ({
  type: 'ADD_PROPOSAL',
  proposal
})

export const addSupplies = supplies => ({
  type: 'ADD_SUPPLIES',
  supplies
})

export const addRocketChoice = rocket => ({
  type: 'ADD_ROCKET_CHOICE',
  rocket
})

export const addDestination = destination => ({
  type: 'ADD_DESTINATION',
  destination
})