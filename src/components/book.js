import React from 'react';
import './styles/Books.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(id));
    
  };
  return (
    <div className="Book" data-id={id}>
      <ul className="book-list">
        <li className="title">
          Title:
          {title}
        </li>
        <li className="author">
          Author:
          {author}
        </li>
      </ul>
      <div className="book-delete">
        <button type="button" onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
