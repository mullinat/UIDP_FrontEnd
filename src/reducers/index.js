import { combineReducers } from 'redux'
import identities from './identities';

const todoApp = combineReducers({
  identities,
})

export default todoApp
