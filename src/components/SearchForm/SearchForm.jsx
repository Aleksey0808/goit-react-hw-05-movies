import React from 'react';
import { useFormik } from 'formik';

export const SearchForm = () => {
  const formik = useFormik({
    initialValues: {
      movie: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="">Search movie</label>
      <input
        id="movie"
        placeholder="Search..."
        name="movie"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.movie}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
