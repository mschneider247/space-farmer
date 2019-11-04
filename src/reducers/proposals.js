export const proposals = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROPOSAL':
      return action.proposals
    case 'ADD_PROPOSAL':
      return state.concat(action.proposal)
    case 'ADD_SUPPLIES':
      return state.map(proposal => {
        return proposal.id === state[state.length - 1].id ? {...proposal, supplies : action.supplies} : proposal;
      })
    case 'ADD_ROCKET_CHOICE':
      return state.map(proposal => {
        return proposal.id === state[state.length - 1].id ? {...proposal, rocket : action.rocket} : proposal;
      })
    case 'ADD_DESTINATION':
      return state.map(proposal => {
        return proposal.id === state[state.length - 1].id ? {...proposal, destination : action.destination} : proposal;
      })  
    default:
      return state
  }
}