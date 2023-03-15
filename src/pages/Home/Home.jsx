// import { Outlet } from 'react-router-dom';
import TrendingList from '../../components/TrendingList/TrendingList';
import { popularMovies } from '../../utils/ApiService';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularMovies().then(api => setMovies(api.results));
  }, []);

  return (
    <div>
      <TrendingList movies={movies} />
    </div>
  );
};

// export default Home;
