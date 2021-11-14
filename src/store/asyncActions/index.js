import axios from 'axios';
import {
  getCategories,
  getCategoryItems,
  getCategoriesSuccess,
  getCategoryItemsSuccess,
} from '../actions';
import categories from '../../../categories.json';
import items from '../../../categoriesItem.json';

export const fetchCategories = () => {
  return async dispatch => {
    // const response = await axios.get('http://localhost:7070/categories');
    dispatch(getCategories({ loading: true }));
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve(categories);
      }, [1000]);
    }).catch(e => dispatch(getCategoryFailure(e)));

    dispatch(getCategoriesSuccess(response));
  };
};

export const fetchItems = parentId => {
  return async dispatch => {
    // const response = await axios.get(`http://localhost:7070/items/${parentId}`);
    dispatch(getCategoryItems({ loading: true }));
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve(items);
      }, [1000]);
    }).catch(e => dispatch(getCategoryItemsFailure(e)));

    dispatch(getCategoryItemsSuccess(response));
  };
};
