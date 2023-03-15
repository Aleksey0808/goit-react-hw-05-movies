import { useParams } from 'react-router-dom';
import { movieCast } from '../../utils/ApiService';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieCast(movieId).then(id => setMovies(id));
  }, [movieId]);

  return (
    <ul>
      {movies.cast
        ? movies.cast.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  height={150}
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })
        : ''}
    </ul>
  );
};
