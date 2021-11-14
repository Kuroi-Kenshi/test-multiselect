import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick'
import { eventGenerator } from '../../../utils/eventGenerator';
import Pagination from '../Pagination';

import s from './TextInput.module.sass';

const MultiSelect = ({ name, value, onChange, items, parentId, loading }) => {
  const [showList, setShowList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const listRef = useRef(null);

  useOutsideClick(listRef, setShowList);

  const onFocus = () => {
    if (items.length) setShowList(true);
  }

  useEffect(() => {
    if (parentId) {
      setCurrentPage(1);
      setShowList(true);
    } else {
      currentItems = [];
    }
  }, [parentId]);

  const placeholderCreator = () => {
    if (parentId && !loading) {
      return 'Выберите товар'
    }

    if (loading) {
      return 'Загрузка данных...'
    }
  }

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  let currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const pagiante = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.inputWrapper} role="inputwrapper" onClick={() => setShowList(true)}>
        <input
          type="text"
          name={name}
          value={value.join(', ')}
          onChange={onChange}
          onFocus={onFocus}
          className={s.input}
          disabled
          placeholder={placeholderCreator()}
          data-event={eventGenerator('Click on Multiselect', '')}
        />
      </div>

      {showList && parentId && (
        <div ref={listRef} className={s.dropdown}>
          <ul className={s.list}>
            {currentItems.map(item => (
              <li key={item.id} className={value.some(name => name === item.name) ? s.listItemActive : ''}>
                <button data-event={eventGenerator('Select good', item)} className={s.btn} onClick={() => onChange(item, parentId)}>{item.name}</button>
              </li>
            ))}
          </ul>
          {items.length > 2 && (
            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} pagiante={pagiante} currentPage={currentPage} />
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;