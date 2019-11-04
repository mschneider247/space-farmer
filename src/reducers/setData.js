export const rockets = (state = [], action) => {
  switch (action.type) {
    case 'SET_ROCKETS':
      return action.data;
    default:
      return state;
  }
};

export default rockets;
