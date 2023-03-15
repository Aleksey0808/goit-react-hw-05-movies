import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/movies' && <h2>Trending today</h2>}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

TrendingList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
export default TrendingList;
