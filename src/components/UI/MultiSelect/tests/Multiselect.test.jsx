import React from 'react';
import { shallow } from 'enzyme';
import { ShallowMock } from './shallow-mock.jsx';
import Multiselect from '../index';

let store = {
  foo: 'Foo',
  bar: 'Bar'
};

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
const categoryItems = [
  {
    "id": 1,
    "parent_id": 1,
    "name": "AMG GT 43MATIC+",
    "flags": ""
  },
  {
    "id": 2,
    "parent_id": 1,
    "name": "Audi RS7",
    "flags": ""
  },
]
const category = '';
const selectedItems = [];
const onChangeInput = () => { }
const fetchItems = () => { }
let instance;
let component;
const setUp = (props) => shallow(ShallowMock(<Multiselect {...props} />, store));

beforeEach(() => {
  component = setUp();
})

describe("should render Select component", () => {

  test("matches snapshot1", () => {
    const wrapper = setUp({
      name: "childs",
      onChange: onChangeInput,
      value: selectedItems,
      parentId: category,
      items: categoryItems,
      onFetch: fetchItems,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  })


  it("pagination hook test", () => {
    instance.useOutsideClick(null, onChangeInput);
    expect(component.state().searchQuery).toBe('test');
  })
})