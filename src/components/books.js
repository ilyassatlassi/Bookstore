import React from 'react';
import './styles/Books.css';
import PropTypes from 'prop-types';
import Form from './formBook';
// import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/booksSlice';


function Books(props) {
  const { title, author } = props;
  return (
    <div className="Books">
      <ul className="books-list">
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
        <button type="button">Delete</button>
      </div>
      <Form />
    </div>
  );
}
Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
