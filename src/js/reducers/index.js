import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import newsstock from './newsstock';

const rootReducers = combineReducers({
  newsstock,
  routing: routerReducer
});

export default rootReducers;
