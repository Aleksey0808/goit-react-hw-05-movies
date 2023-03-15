import { Form, Formik, Field } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../utils/ApiService';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const SearchForm = onSubmit => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (query, { resetForm }) => {
    setSearchParams(query);
    resetForm();
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      searchMovies(movieTitle).then(api => setMovies(api.results));
    }
  }, [searchParams]);

  const initialValues = {
    query: '',
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field type="text" name="query" />
          </label>

          <button type="submit">button</button>
        </Form>
      </Formik>
      <TrendingList movies={movies} />
    </div>
  );
};
