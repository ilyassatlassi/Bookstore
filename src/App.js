import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/books';
import Categories from './components/Categories';

function App() {
  return (
    <div className='App'>
      <nav>
        <div className="header">
      <Link className="header__logo" to="/">Bookstore CMS</Link>
          <ul>
            <li><Link to="/" className="books">Books</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
