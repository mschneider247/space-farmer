import { setUser } from './setUser';
import { proposals } from './proposals'
import { combineReducers } from '../../../../../Library/Caches/typescript/3.5/node_modules/redux';

export const rootReducer = combineReducers({
  setUser,
  proposals
})