import { createStore } from 'redux';
import quotesReducer from './reducers';

const store = createStore(quotesReducer);

export default store;
