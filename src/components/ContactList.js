import React from 'react';
import s from './ContactList.module.css';
import { delateContact } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li className={s.contactItem} key={id}>
            {name}:{number}
            <button
              className={s.button}
              type="button"
              onClick={() => dispatch(delateContact(id))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
