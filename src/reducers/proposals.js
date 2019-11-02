export const proposals = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROPOSAL':
      return action.proposals
    case 'ADD_PROPOSAL':
      return state.concat(action.proposal)
    default:
      return state
  }
}