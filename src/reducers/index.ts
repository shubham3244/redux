import changeValue from './Increment-Decrement';
import {combineReducers} from 'redux'
import changeScoreValue from './scoreCardCounter';
const rootReducer = combineReducers(
  {
   counter:changeValue,
   scoreCard:changeScoreValue
  }
)
export default rootReducer;