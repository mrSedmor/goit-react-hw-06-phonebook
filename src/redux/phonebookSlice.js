import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import insertIntoSortedContacts from 'services/insertIntoSortedContacts';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    setFilter(state, { payload }) {
      console.log(payload);
      state.filter = payload;
    },
    addContact: {
      reducer(state, { payload }) {
        insertIntoSortedContacts(state.contacts, payload);
      },
      prepare(contact) {
        return { payload: { id: nanoid(8), ...contact } };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export const phonebookSliceReducer = phonebookSlice.reducer;
