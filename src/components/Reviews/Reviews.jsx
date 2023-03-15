import { useParams } from 'react-router-dom';
import { movieReviews } from '../../utils/ApiService';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    movieReviews(movieId).then(id => setMovies(id));
  }, [movieId]);

  return (
    <ul>
      {movies.results
        ? movies.results.map(rew => {
            return (
              <li key={rew.id}>
                <h3>Author: {rew.author}</h3>
                <p>{rew.content}</p>
              </li>
            );
          })
        : ''}
    </ul>
  );
};

export default Reviews;
