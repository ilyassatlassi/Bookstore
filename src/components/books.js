import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import Form from './formBook';
import { getBooks } from '../redux/books/booksSlice';
import './styles/Books.css';

export default function Books() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    
    <div className="books">
      <ul className="books-list">
        {books.map((item) => (
          <li key={item.item_id}>
            <Book
              title={item.title}
              author={item.author}
              category={item.category}
              id={item.item_id}
            />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
