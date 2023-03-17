import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieLink, List } from './TrendingList.styled';

const TrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </li>
        ))}
      </List>
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
