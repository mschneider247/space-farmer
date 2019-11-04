import { combineReducers } from 'redux';
import { setUser } from './setUser';
import { proposals } from './proposals';
import { rockets } from './setData';

export const rootReducer = combineReducers({
  rockets,
  setUser,
  proposals,
});

export default rootReducer;
