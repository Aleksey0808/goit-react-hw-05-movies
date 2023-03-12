import { useState, useEffect } from 'react';
import { popularMovies } from '../ApiService';

export function usePopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularMovies().then(api => setMovies(api.results));
  }, []);

  return { movies };
}
