import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contact/add', (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));
const delateContact = createAction('contact/delate');
const filterContact = createAction('contact/filter');
export { addContact, delateContact, filterContact };
