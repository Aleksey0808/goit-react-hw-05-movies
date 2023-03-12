import { movieReviews } from '../ApiService';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieReviews(movieId).then(ret => setReviews(ret));
  }, [movieId]);
  return { reviews };
};
