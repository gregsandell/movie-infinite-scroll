import { useState, useEffect } from 'react';

import { fetchMovies } from './util/fetchMovies';
import Movie from './components/Movie';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let searchTerm = 'john';

  useEffect(() => {
    (async () => {
      let newdata = await fetchMovies(searchTerm, currentPage);

      setData([...data, ...newdata.data.Search]);
    })();
  }, [currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setCurrentPage((previousValue) => ++previousValue);
    }
  };

  return (
    <div className="App">
      <h1>Infinite Scroll!</h1>
      <div id="scrollable" onScroll={handleScroll}>
        {data.map((movie, i) => (
          <Movie dataSource={movie} key={i} />
        ))}
      </div>
    </div>
  );
};
export default App;
