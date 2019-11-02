import { setUser } from './setUser';
import { proposals } from './proposals'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  setUser,
  proposals
})