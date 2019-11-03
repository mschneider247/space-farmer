import { setUser } from './setUser';
import { proposals } from './proposals';
import { rockets } from './setData';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  rockets,
  setUser,
  proposals
})