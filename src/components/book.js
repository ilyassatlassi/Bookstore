import React from 'react';
import './styles/Books.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/booksSlice';

function Book(props) {
  const {
    title, author, category, id,
  } = props;
  const dispatch = useDispatch();
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
        <li>
          Categories:
          {category}
        </li>
      </ul>
      <div className="book-delete">
        <button type="button" onClick={() => dispatch(deleteBooks(id))}>Delete</button>
      </div>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
