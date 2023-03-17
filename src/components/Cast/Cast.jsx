import { useParams } from 'react-router-dom';
import { movieCast } from '../../utils/ApiService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import DefaultImage from '../../utils/default-avatar.png';
import { Item, Container } from './Cast.styled';

const Cast = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    movieCast(movieId)
      .then(id => (id.cast.length ? setMovies(id) : null))
      .catch(error => {
        toast.error('Error ofrequast!', { autoClose: 1500 });
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [movieId]);

  return (
    <Container>
      <ToastContainer />
      {load && <Loader />}
      <ul>
        {movies.cast
          ? movies.cast.map(cast => {
              return (
                <Item key={cast.id}>
                  <img
                    height={150}
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${cast.profile_path}`
                        : DefaultImage
                    }
                    alt={cast.name}
                  />
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </Item>
              );
            })
          : 'Sorry, we don`t have any cast information for this movie'}
      </ul>
    </Container>
  );
};

export default Cast;
