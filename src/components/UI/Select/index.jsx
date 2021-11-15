import React from 'react';
import { eventGenerator } from '../../../utils/eventGenerator';
import s from './Select.module.sass'

const Select = ({ name, onChange, value, options = [], showTitle = false, loading }) => {
  return (
    <div className={s.wrapper}>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className={s.select}
        data-event={eventGenerator("Click on Select", '')}
        disabled={loading}
      >
        {showTitle ? <option value="" className={s.title}> {loading ? "Загрузка данных" : "Выберите категорию"}</option> : false}
        {options.map(item => {
          return (
            <option key={item.id} value={item.id} data-event={eventGenerator("Parent category selected", item)}>{item.name}</option>
          )
        })
        }
      </select>
    </div>
  );
};

export default React.memo(Select);
