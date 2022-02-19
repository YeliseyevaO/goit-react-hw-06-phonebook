import s from './Filter.module.css';
import { useState } from 'react';
import { filterContact } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const inputChange = e => {
    const { value } = e.currentTarget;

    setFilter(value);
    dispatch(filterContact(filter));
  };
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className={s.input}
        name="filter"
        value={filter}
        type="input"
        onChange={inputChange}
      ></input>
    </>
  );
}
