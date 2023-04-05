import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <nav>
        <div className="header">
          <h1 className="title">Bookstore</h1>

          <ul>
            <li><Link to="/" className="no-border">Books</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
          </ul>
        </div>
      </nav>
      <div className="footer"><p>Bookstore © 2023</p></div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
