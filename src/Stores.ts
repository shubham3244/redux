import rootReducer from "./reducers/index";
import { legacy_createStore as createStore,compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {  applyMiddleware, combineReducers } from 'redux'
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const Store  =  createStore(rootReducer, composeEnhancers());
export default Store;