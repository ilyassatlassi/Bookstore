import React, { useRef } from 'react';
import './styles/Books.css';
import { useDispatch } from 'react-redux';
import { insertBooks } from '../redux/books/booksSlice';

function Form() {
  const titleVal = useRef();
  const authorVal = useRef();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (titleVal.current.value && authorVal.current.value) {
      dispatch(
        insertBooks({
          title: titleVal.current.value,
          author: authorVal.current.value,
          item_id: Math.random().toString(36).substring(2, 15)
          + Math.random().toString(36).substring(2, 15),
          category: 'humer',
        }),
      );
      titleVal.current.value = '';
      authorVal.current.value = '';
    } else {
      // eslint-disable-next-line
      alert("Please Add a book first");
    }
  };
  return (
    <div className="book-form">
      <h2>Add Book</h2>
      <form>
        <input className='input-title' placeholder="Book title" ref={titleVal} />
        <input className='input-author' placeholder="Book author" ref={authorVal} />
        <input className='btn' type="submit" value="Submit" onClick={handleClick} />
      </form>
    </div>
  );
}

export default Form;
