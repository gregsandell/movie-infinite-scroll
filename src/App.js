import { useState, useEffect } from 'react';

import { fetchMovies } from './util/fetchMovies';
import Movie from './components/Movie';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('john');

  useEffect(() => {
    (async () => {
      let newdata = await fetchMovies(searchTerm, currentPage);

      setData([...data, ...newdata.data.Search]);
    })();
  }, [searchTerm, currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setCurrentPage((previousValue) => ++previousValue);
    }
  };

  const resetCurrentPage = () => {
    setCurrentPage(1)
  }

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
    resetCurrentPage()
  }

  return (
    <div className="App">
      <h1>Infinite Scroll!</h1>
      Search Term:
      <input type="text" value={searchTerm} defaultValue="john" alt="Search Term"/>
      <button type="button" onClick={handleSearchTermChange}>New Search</button>
      <div id="scrollable" onScroll={handleScroll}>
        {data.map((movie, i) => (
          <Movie dataSource={movie} key={i} />
        ))}
      </div>
    </div>
  );
};
export default App;
