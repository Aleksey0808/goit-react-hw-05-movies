import { movieDetails } from '../ApiService';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [details, setMovieDetails] = useState([]);

  useEffect(() => {
    movieDetails(movieId).then(api => setMovieDetails(api));
  }, [movieId]);

  return { details };
};
