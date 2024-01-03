import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      console.log('Contacts from API:', contacts);
      return contacts.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      // Handle the error consistently, e.g., show an error message to the user
      throw error; // Or dispatch an action to update the state with the error
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post('/contacts', contact);
      // console.log('Contacts from API:', contacts);
      return contacts.data;
    } catch (error) {
      console.error('Error adding contacts:', error);

      throw error;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const contacts = await axios.delete(`contacts/${contactId}`);
      console.log('Contacts from API:', contacts);
      return contacts.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
);
