// import { Outlet } from 'react-router-dom';
import TrendingList from '../../components/TrendingList/TrendingList';
import { popularMovies } from '../../utils/ApiService';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import { HomeContainer } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    popularMovies()
      .then(api => setMovies(api.results))
      .catch(error => {
        toast.error('Error ofrequast!', { autoClose: 1500 });
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <HomeContainer>
      <ToastContainer />
      <h2>Trending today</h2>
      {load && <Loader />}
      <TrendingList movies={movies} />
    </HomeContainer>
  );
};

export default Home;
