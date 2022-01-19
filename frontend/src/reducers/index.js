import authReducer from './auth';
import itemReducer from './items';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer
});

export default rootReducer;
