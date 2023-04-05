import React, {useRef}from 'react';
import './styles/Books.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const { books } = useSelector((state) => state.books);
  const titleVal = useRef();
  const authorVal = useRef();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (titleVal.current.value && authorVal.current.value) {
      dispatch(addBook({ title: titleVal.current.value, author: authorVal.current.value, item_id: books.length }));
      titleVal.current.value = '';
    authorVal.current.value = '';
    } else {
      alert('Please Add a book first');
    }

  }
  return (
    <div className="book-form">
      <h2>Add Book</h2>
      <form>
        <input placeholder="Book title" ref={titleVal}/>
        <input placeholder="Book author" ref={authorVal}/>
        <input type="submit" value="Submit" onClick={handleClick}/>
      </form>
    </div>
  );
}

export default Form;
