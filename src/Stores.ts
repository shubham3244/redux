import rootReducer from "./reducers/index";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {  applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk';
const Store  =  createStore(rootReducer);
export default Store;