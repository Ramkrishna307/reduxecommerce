// Import MoviesCard component if not already imported
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../feature/Movies/MovieSlice';
import MovieCard from '../MoveCard';
import './style.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log("Movies from selector",movies);
  let renderMovies = "";

  renderMovies = movies.Response === "True" ? (movies.Search.map((movie, index) => ( <MovieCard key={index} movie={movie} />))) : (
    <div>
      <h3>Error In MovieListing</h3>
    </div>
  );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
