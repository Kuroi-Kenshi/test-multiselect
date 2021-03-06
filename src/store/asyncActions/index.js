import {
  getCategories,
  getCategoryItems,
  getCategoriesSuccess,
  getCategoryItemsSuccess,
  getCategoriesFailure,
  getCategoryItemsFailure,
} from '../actions';
import categories from '../../../categories.json';
import items from '../../../categoriesItem.json';

export const fetchCategories = () => {
  return async dispatch => {
    dispatch(getCategories());
    new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(categories);
        // rejected({ error: '500 server errorr' });
      }, [1000]);
    })
    .then(response => dispatch(getCategoriesSuccess(response)))
    .catch(e => dispatch(getCategoriesFailure(e)));
  };
};

export const fetchItems = parentId => {
  return async dispatch => {
    dispatch(getCategoryItems());
    new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(items);
        // rejected({ error: '500 server errorr' });
      }, [1000]);
    })
    .then(response => dispatch(getCategoryItemsSuccess(response)))
    .catch(e => dispatch(getCategoryItemsFailure(e)));
  };
};
