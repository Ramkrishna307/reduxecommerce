// Home.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies, fetchAsyncMovies, getAllMovies, selectMovies } from '../../feature/Movies/MovieSlice';
import MovieListing from '../MoveListing';


const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    
  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
