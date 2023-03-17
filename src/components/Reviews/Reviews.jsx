import { useParams } from 'react-router-dom';
import { movieReviews } from '../../utils/ApiService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import { Item, Container } from './Reviews.styled';

const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    movieReviews(movieId)
      .then(id => (id.results.length ? setMovies(id) : null))
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
        {movies.results
          ? movies.results.map(rew => {
              return (
                <Item key={rew.id}>
                  <h3>Author: {rew.author}</h3>
                  <p>{rew.content}</p>
                </Item>
              );
            })
          : 'Sorry, we don`t have any cast information for this movie'}
      </ul>
    </Container>
  );
};

export default Reviews;
