import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './formBook';
import './styles/Books.css';

export default function Books() {
  const {books} = useSelector((state) => state.books);

  return (
    <div className="books">
      <ul className="books-list">
        {books.map((item) => (
          <li key={item.item_id}>
            <Book title={item.title} author={item.author} id={item.item_id} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
 }