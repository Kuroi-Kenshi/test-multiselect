import { category } from '../../constants';
import categories from '../categories';

const defaultState = {
  data: [],
  loading: false,
};

describe('Category reducer test', () => {
  it(category.request, () => {
    const action = {
      type: category.request,
    };

    expect(categories(defaultState, action)).toEqual({
      ...defaultState,
      loading: true,
    });
  });

  it(category.success, () => {
    const stateBefore = {
      data: [],
      loading: true,
    };
    const action = {
      type: category.success,
      payload: [{ id: 1 }, { id: 2 }],
    };

    expect(categories(stateBefore, action)).toEqual({
      ...stateBefore,
      loading: false,
      data: action.payload,
    });
  });
});
