import { useParams } from 'react-router-dom';
import { movieReviews } from '../../utils/ApiService';
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    movieReviews(movieId).then(id => setMovies(id));
  }, [movieId]);
  // console.log(movies.results);
  return (
    <ul>
      {movies.results
        ? movies.results.map(rew => {
            return (
              <li key={rew.id}>
                <h3>Author: {rew.author}</h3>
                <p>{rew.content}</p>
                {/* <p>Character: {rew.character}</p> */}
              </li>
            );
          })
        : ''}
    </ul>
  );
};
