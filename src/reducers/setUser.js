export const setUser = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return action.user
    default:
      return state
  }
}