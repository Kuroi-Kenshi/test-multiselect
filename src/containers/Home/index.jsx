import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchItems } from '../../store/asyncActions';
import withSelectForm from '../../HoC/withSelectForm';

import s from './Home.module.sass';

const Home = ({ dispatch }) => {

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems());
  }, []);

  return (
    <div className={s.card}>
      <h1 className={s.title}>Hello friend!</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories.data || [],
  categoriesLoading: state.categories.loading,
  items: state.categoryItems.data || [],
  itemsLoading: state.categoryItems.loading,
});

export default connect(mapStateToProps)(React.memo(withSelectForm(Home)));