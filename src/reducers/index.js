import counter from "./counter";
import isLoggedIn from "./isLoggedIn";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  isLoggedIn,
  counter
})

export default allReducers
