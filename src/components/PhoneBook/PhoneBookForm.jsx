// PhoneBookForm.js
import React, { useState } from 'react';
import styles from './PhoneBookForm.module.css';

import { getVisibleContacts } from '../../redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactShelf/contactsOperation';
import { nanoid } from 'nanoid';

export default function PhoneBookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const normalizedName = name.toLowerCase();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      alert(`${name}: is already in contacts`);
      return;
    }

    try {
      await dispatch(addContact({ id: nanoid(), name, number }));
      reset();
    } catch (error) {
      console.error('Error adding contact:', error.message);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.formPhone} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          required
          placeholder="Example: Diana"
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="number"
          placeholder="Example: 0997658998"
          pattern="[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          minLength="13"
          maxLength="13"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
