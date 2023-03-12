import { Outlet } from 'react-router-dom';
import { TrendingList } from '../components/TrendingList/TrendingList';

import { usePopularMovies } from '../utils/hooks/usePopularMovies';

export const Home = () => {
  const { movies } = usePopularMovies();

  return (
    <div>
      <TrendingList movies={movies} />
      <Outlet />
    </div>
  );
};
