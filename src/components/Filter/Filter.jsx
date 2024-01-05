import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors/selectors';
import { updateFilter } from '../../redux/myContacts/myContacts';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter) || ''; // Provide a default value if filter is falsy

  const changeFilterHandler = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Search</label>
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={changeFilterHandler}
        />
      </div>
    </div>
  );
}
