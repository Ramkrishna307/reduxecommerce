// Home.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies, fetchAsyncMovies, fetchAsyncSeries, getAllMovies, selectMovies } from '../../feature/Movies/MovieSlice';
import MovieListing from '../MoveListing';
import Carousel from '../Carousel';


const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
    
  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <Carousel/>
      <MovieListing />
    </div>
  );
};

export default Home;
