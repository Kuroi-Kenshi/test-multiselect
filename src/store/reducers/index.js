import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categories from './categories';
import categoryItems from './categoryItems';
import userActions from './userActions';

const rootReducer = combineReducers({
  categories,
  categoryItems,
  userActions,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
