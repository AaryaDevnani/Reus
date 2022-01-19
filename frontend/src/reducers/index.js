import authReducer from './auth';
import itemReducer from './items';
import { combineReducers } from 'redux';
import groceryReducer from './groceryItems';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
  groceries: groceryReducer
});

export default rootReducer;
