import { createStore } from 'redux';
import reducers from './reducers';

const INITIAL_STATE = {};

const store = createStore(reducers, INITIAL_STATE);

export default store;
