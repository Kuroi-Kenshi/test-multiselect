import { userAction } from '../constants';

const userActions = (state = [], action) => {
  switch (action.type) {
    case userAction.add:
      return [...state, action.payload];
    case userAction.update:
      const newState = state.map(act => {
        if (act.id === action.payload.id) {
          return payload;
        }
      });
      return newState;
    case userAction.remove:
      const filteredState = state.filter(act => act.id !== action.payload.id);
      return filteredState;
    default:
      return state;
  }
};

export default userActions;
