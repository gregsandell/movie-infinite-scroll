import axios from 'axios';

const API_KEY = 'f9b71d9a';
const ROOT_URI = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (title = 'john', page = 1) => {
  const url = `${ROOT_URI}&s=${title}&page=${page}`;

  const request = axios.get(url);
  return request;
};
