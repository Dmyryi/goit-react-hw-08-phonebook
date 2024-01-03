import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
} from '../../redux/contactShelf/contactsOperation';
import { getVisibleContacts } from '../../redux/selectors/selectors';

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
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button onClick={() => handleDeleteContact(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBookList;
