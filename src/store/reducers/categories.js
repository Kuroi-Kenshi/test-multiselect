import { category } from '../constants';

const defaultState = {
  data: [],
  loading: false,
  errors: false,
};

const categories = (state = defaultState, action) => {
  switch (action.type) {
    case category.request:
      return {
        ...state,
        loading: true,
      };
    case category.success:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case category.failure:
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
      };
    case category.add:
      return {
        ...state,
        data: [...action.payload],
      };
    case category.update:
      const newState = state.data.map(category => {
        if (category.id === action.payload.id) {
          return payload;
        }
      });
      return { ...state, data: newState };
    case category.remove:
      const filteredData = state.data.filter(category => category.id !== action.payload.id);
      return { ...state, data: filteredData };
    default:
      return state;
  }
};

export default categories;
