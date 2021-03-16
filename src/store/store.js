import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduser from './reduser';

const store = createStore(reduser, applyMiddleware(reduxThunk));

export default store;
