import { createStore, compose } from 'redux';
import reducers from './reducers';

const INITIAL_STATE = {};
const enhancers = [];

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (
	process.env.NODE_ENV === 'development' &&
	typeof reduxDevToolsExtension === 'function'
)
	enhancers.push(reduxDevToolsExtension());

const composedEnhancers = compose(...enhancers);
const store = createStore(reducers, INITIAL_STATE, composedEnhancers);

export default store;
