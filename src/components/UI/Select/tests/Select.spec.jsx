import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from '../index';

const onChangeSelect = () => { }
const category = '';
const categories = [
  {
    "id": 1,
    "name": "Cars",
    "flags": ""
  },
  {
    "id": 2,
    "name": "Motorcycles",
    "flags": ""
  },
  {
    "id": 3,
    "name": "Bicycles",
    "flags": ""
  },
  {
    "id": 4,
    "name": "Scooters",
    "flags": ""
  },
  {
    "id": 5,
    "name": "Airplanes",
    "flags": ""
  }
]

const setUp = (props) => shallow(<Select {...props} />);

// beforeEach(() => {
//   component = setUp({
//     name: "categories",
//     onChange: onChangeSelect,
//     value: category,
//     options: categories,
//   });
// });


describe("should render Select component", () => {

  test("matches snapshot1", () => {
    const wrapper = setUp({
      name: "categories",
      onChange: onChangeSelect,
      value: category,
      options: categories,
      showTitle: true
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  test("render without options", () => {
    const wrapper = setUp({
      name: "categories",
      onChange: onChangeSelect,
      value: category,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})