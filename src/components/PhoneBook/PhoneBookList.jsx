// PhoneBookList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
} from '../../redux/contactShelf/contactsOperation';
import { getVisibleContacts } from '../../redux/selectors/selectors';
import styles from './PhoneBookForm.module.css';
import DeleteIcon from './icons/DeleteIcon';

const PhoneBookList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(state => state.myContacts.isLoading);
  const error = useSelector(state => state.myContacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContactsData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContactsData();
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <div className={styles.listContainer}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul className={styles.list}>
        {contacts.map(item => (
          <li key={item.id} className={styles.listItem}>
            <p>
              {item.name}: {item.number}
            </p>

            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteContact(item.id)}
            >
              <DeleteIcon className={styles.icon} />
              <span className={styles.deleteText}>Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBookList;
