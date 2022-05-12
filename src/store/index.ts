import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MoreApp from '../reducers/index';
const store = createStore(MoreApp, applyMiddleware(thunkMiddleware));
export default store;
