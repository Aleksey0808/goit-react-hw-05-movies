import {
  Outlet,
  Link,
  useParams,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { movieDetails } from '../../utils/ApiService';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieDetails(movieId).then(id => setMovies(id));
  }, [movieId]);
  // console.log(movies);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLinkHref}>
        {' '}
        <button type="button">Go back</button>
      </Link>

      <div>
        <h2>
          {movies.title}(
          {movies.release_date ? movies.release_date.slice(0, 4) : ''})
        </h2>
        <img
          height={250}
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movies.poster_path}`}
          alt={movies.original_title}
        />
        <p>
          User Score:{' '}
          {movies.vote_average
            ? Math.fround(movies.vote_average * 10).toFixed(0)
            : ''}
          %
        </p>
        <h3>Overview</h3>
        <p>{movies.overview}</p>
        <h3>Genres</h3>
        <p>
          {movies.genres
            ? movies.genres.map(genre => genre.name).join(', ')
            : ''}
        </p>
      </div>

      <p>Additional information</p>
      <NavLink to={`/movies/${movieId}/cast`} state={location.state}>
        <p>Cast</p>
      </NavLink>
      <NavLink to={`/movies/${movieId}/reviews`} state={location.state}>
        <p>Reviews</p>
      </NavLink>

      <Outlet />
    </div>
  );
};
