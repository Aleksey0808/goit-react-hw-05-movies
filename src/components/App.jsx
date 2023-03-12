import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path=":homeId" element={<MovieDetails />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
