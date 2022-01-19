import authReducer from './auth';
import itemReducer from './items';
import { combineReducers } from 'redux';
import groceryReducer from './groceryItems';
import donationReducer from './donations';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
  groceries: groceryReducer,
  donations: donationReducer
});

export default rootReducer;
