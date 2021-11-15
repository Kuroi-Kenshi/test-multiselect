import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from '../index';

const setUp = (props) => shallow(<Pagination {...props} />);

describe("should render Pagination component", () => {

  test("matches", () => {
    const wrapper = setUp({
      itemsPerPage: 10,
      totalItems: 50,
      pagiante: () => { },
      currentPage: 1
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})