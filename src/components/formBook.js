import React from 'react';
import './styles/Books.css';

function Form() {
  return (
    <div className="book-form">
      <h2>Add Book</h2>
      <form>
        <input placeholder="Book title" />
        <input placeholder="Book author" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
