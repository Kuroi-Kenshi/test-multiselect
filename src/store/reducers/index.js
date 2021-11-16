import { combineReducers } from 'redux';
import categories from './categories';
import categoryItems from './categoryItems';
import userActions from './userActions';

export const rootReducer = combineReducers({
  categories,
  categoryItems,
  userActions,
});
