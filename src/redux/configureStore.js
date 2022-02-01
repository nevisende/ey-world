import { createStore, applyMiddleware, combineReducers } from 'redux';

import logger from 'redux-logger';
import airDataReducer from './airdata/airdata';
import themeReducer from './theme/theme';
import pageinfoReducer from './pageinfo/pageinfo';

const reducer = combineReducers({
  airDataReducer,
  pageinfoReducer,
  themeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
