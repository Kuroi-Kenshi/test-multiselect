import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../../store/actions';
import { eventGenerator } from '../../utils/eventGenerator';
import Select from '../../components/UI/Select';
import MultiSelect from '../../components/UI/MultiSelect';

import s from './withSelectForm.module.sass';

export const withSelectFrom = Component => {
  return props => {
    const dispatch = useDispatch();
    const { categories, categoriesLoading, items, itemsLoading } = props;

    const [multiselectData, setMultiselectData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoryItems, setCategoryItems] = useState([]);

    const selectedItems = selectedCategory
      ? multiselectData[selectedCategory].map(el => el.name)
      : [];

    const onChangeMultiselect = useCallback((item, parentId) => {
      const itemInArray = multiselectData[parentId].some(el => el.id === item.id);
      if (!itemInArray) {
        setMultiselectData(prev => ({ ...prev, [parentId]: [...prev[parentId], item] }));
      } else {
        const parentItems = multiselectData[parentId].filter(el => el.id !== item.id);
        setMultiselectData(prev => ({ ...prev, [parentId]: parentItems }));
      }
    });

    useEffect(() => {
      if (categories.length) {
        const defaultObj = {};
        categories.forEach(category => (defaultObj[category.id] = []));
        setMultiselectData(defaultObj);
      }
    }, [categories]);

    const onChangeSelect = useCallback(e => {
      const parentId = e.target.value;
      setSelectedCategory(parentId);

      const parentItems = items.filter(child => `${child.parent_id}` === `${parentId}`);
      setCategoryItems(parentItems);
      if (!e.target.value) {
        setCategoryItems([]);
      }
      const dataAttr = e.target.selectedOptions[0].dataset.event || e.target.dataset.event;
      const event = JSON.parse(dataAttr);
      if (!event.eventValue.flags) {
        dispatch(addUserAction(event));
      }
    });

    const onListenerUserActions = e => {
      if (e.target.dataset.event) {
        const event = JSON.parse(e.target.dataset.event);
        dispatch(addUserAction(event));
      }
    };

    return (
      <div
        className={s.wrapper}
        onClick={onListenerUserActions}
        data-event={eventGenerator('Click on Home component', '')}>
        <Component {...props} />
        <div className={s.form} data-event={eventGenerator('Click on form', '')}>
          <Select
            name="categories"
            onChange={onChangeSelect}
            value={selectedCategory}
            options={categories}
            loading={categoriesLoading}
            showTitle
          />
          <MultiSelect
            name="childs"
            onChange={onChangeMultiselect}
            value={selectedItems}
            parentId={selectedCategory}
            items={categoryItems}
            loading={itemsLoading}
          />
        </div>
      </div>
    );
  };
};

export default withSelectFrom;
