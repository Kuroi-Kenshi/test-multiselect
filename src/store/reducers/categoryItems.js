import { categoryItems } from '../constants';

const defaultState = {
  data: [],
  loading: false,
};

const items = (state = defaultState, action) => {
  switch (action.type) {
    case categoryItems.request:
      return {
        ...state,
        loading: true,
      };
    case categoryItems.success:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case categoryItems.failure:
      return {
        ...state,
        errors: action.payload,
      };
    case categoryItems.add:
      return {
        ...state,
        data: action.payload,
      };
    case categoryItems.update:
      const newState = state.map(category => {
        if (category.id === action.payload.id) {
          return payload;
        }
      });
      return { ...state, data: newState };
    case categoryItems.remove:
      const filteredData = state.data.filter(category => category.id !== action.payload.id);
      return { ...state, data: filteredData };
    default:
      return state;
  }
};

export default items;
