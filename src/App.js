import React, { useState, useEffect } from 'react';

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
      console.log(newdata)
      if (newdata.data.Error) {
        setData([])
      } else {
        setData([...data, ...newdata.data.Search]);
      }
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

  const searchTermChange = (e) => {
    setData([])
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  return (
      <div className="App">
        <h1>Infinite Scroll!</h1>
        Search Term:
        <input type="text" onChange={searchTermChange} value={searchTerm} alt="Search Term"/>
        <div id="scrollable" onScroll={handleScroll}>
          {data.map((movie, i) => (
              <Movie dataSource={movie} key={i} />
          ))}
        </div>
      </div>
  );
};
export default App;
