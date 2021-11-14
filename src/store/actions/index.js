import { category, categoryItems, userAction } from '../constants';

//categories
export const getCategories = data => ({
  type: category.request,
  payload: data,
});

export const getCategoriesSuccess = data => ({
  type: category.success,
  payload: data,
});

export const getCategoriesFailure = data => ({
  type: category.failure,
  payload: data,
});

export const addCategories = data => ({
  type: category.add,
  payload: data,
});

export const removeCategories = data => ({
  type: category.remove,
  payload: data,
});

export const updateCategories = data => ({
  type: category.update,
  payload: data,
});

//category items
export const getCategoryItems = data => ({
  type: categoryItems.request,
  payload: data,
});

export const getCategoryItemsSuccess = data => ({
  type: categoryItems.success,
  payload: data,
});

export const getCategoryItemsFailure = data => ({
  type: categoryItems.failure,
  payload: data,
});

export const addCategoryItems = data => ({
  type: categoryItems.add,
  payload: data,
});

export const removeCategoryItems = data => ({
  type: categoryItems.remove,
  payload: data,
});

export const updateCategoryItems = data => ({
  type: categoryItems.update,
  payload: data,
});

//userActions
export const addUserAction = data => ({
  type: userAction.add,
  payload: data,
});

export const removeUserAction = data => ({
  type: userAction.remove,
  payload: data,
});

export const updateUserAction = data => ({
  type: userAction.update,
  payload: data,
});
