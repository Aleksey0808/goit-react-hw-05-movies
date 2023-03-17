import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { movieDetails } from '../../utils/ApiService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  Icon,
  Container,
  Title,
  Image,
  Text,
  SubTitle,
  StyledLink,
  WrapperInfo,
  Info,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    movieDetails(movieId)
      .then(id => setMovies(id))
      .catch(error => {
        toast.error('Error ofrequast!', { autoClose: 1500 });
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movie');

  return (
    <Container>
      <ToastContainer />

      <Link to={backLinkHref.current}>
        {' '}
        <Icon />
      </Link>
      {load && <Loader />}
      <div>
        <Title>
          {movies.title}(
          {movies.release_date ? movies.release_date.slice(0, 4) : ''})
        </Title>
        <Image
          height={250}
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movies.poster_path}`}
          alt={movies.original_title}
        />
        <Text>
          User Score:{' '}
          {movies.vote_average
            ? Math.fround(movies.vote_average * 10).toFixed(0)
            : ''}
          %
        </Text>
        <SubTitle>Overview</SubTitle>
        <Text>{movies.overview}</Text>
        <SubTitle>Genres</SubTitle>
        <Text>
          {movies.genres
            ? movies.genres.map(genre => genre.name).join(', ')
            : ''}
        </Text>
      </div>

      <WrapperInfo>
        <Info>Additional information:</Info>
        <StyledLink to={`/movies/${movieId}/cast`} state={location.state}>
          <Info>Cast</Info>
        </StyledLink>
        <StyledLink to={`/movies/${movieId}/reviews`} state={location.state}>
          <Info>Reviews</Info>
        </StyledLink>
      </WrapperInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
