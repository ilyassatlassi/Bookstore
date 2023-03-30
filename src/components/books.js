import React from "react";
import './styles/Books.css'
import Form from './formBook'

function Books({ title, author }) {
  return (
    <div className="Books">
      <ul className="books-list">
        <li className="title">Title:{title}</li>
        <li className="author">Author:{author}</li>
      </ul>
      <div className="book-delete">
        <button type="button">Delete</button>
      </div>
      < Form/>
    </div>
  );
}

export default Books;
