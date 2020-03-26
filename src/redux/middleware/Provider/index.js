import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from '../Logger';
import reducer from '../../reducer';

// const store = createStore(
// 	reducer,
// 	applyMiddleware(thunk, logger)
// );

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;