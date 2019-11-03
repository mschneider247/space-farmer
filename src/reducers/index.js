import { setUser } from './setUser';
import { proposals } from './proposals';
import { setData } from './setData';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  setData,
  setUser,
  proposals
})