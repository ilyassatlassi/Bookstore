import React from 'react';
import './styles/Books.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/booksSlice';
import progressBar from '../assets/progress-bar.png';

function Book(props) {
  const {
    title, author, category, id,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="Book" data-id={id}>
      <ul className="book-list">
        <li className="category">
          {category}
        </li>
        <li className="title">
          {title}
        </li>
        <li className="author">
          {author}
        </li>
        <ul className="book-list-item-action-list">
          <li className="book-list-item-action-list-item"><button type="submit">Comments</button></li>
          <hr />
          <li className="book-list-item-action-list-item">
            <button type="button" onClick={() => dispatch(deleteBooks(id))}>Delete</button>
          </li>
          <hr />
          <li className="book-list-item-action-list-item"><button type="submit">Edit</button></li>
        </ul>

      </ul>
      <div className="book-list-item-right">
        <div className="book-list-item-right-left">
          <img src={progressBar} alt="progress bar" className="book-list-item-right-left-shape" />
          <div className="book-list-item-right-left-right">
            <p className="percentage">70%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <hr />
        <div className="book-list-item-right-right">
          <p className="chapter-heading">Current Chapter</p>
          <p className="chapter-current">Chapter 17</p>
          <button type="submit" className="btn">UPDATE PROGRESS</button>
        </div>
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
