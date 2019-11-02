export const proposals = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROPOSAL':
      return action.user
    default:
      return state
  }
}