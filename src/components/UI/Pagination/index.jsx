import React from 'react';
import { eventGenerator } from '../../../utils/eventGenerator';

import arrow from '../../../assets/icons/arrow-right.svg'
import s from './Pagination.module.sass';

const Pagination = ({ itemsPerPage, totalItems, pagiante, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const togglePage = (number) => {
    if (pageNumbers.length >= number && number > 0) {
      pagiante(number)
    }
  }

  return (
    <div className={s.pagination} data-event={eventGenerator("Click on pagination form", '')}>
      <button className={s.btn} onClick={() => togglePage(currentPage - 1)}>
        <img src={arrow} alt="" className={s.leftArrow} data-event={eventGenerator("Prev page", currentPage - 1)} />
      </button>
      <div data-event={eventGenerator("Click on pagination page number", '')}>{currentPage} из {pageNumbers.length}</div>
      <button className={s.btn} onClick={() => togglePage(currentPage + 1)} >
        <img src={arrow} alt="" data-event={eventGenerator("Next page", currentPage + 1)} />
      </button>
    </div>
  );
};

export default Pagination;