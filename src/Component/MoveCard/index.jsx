import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
const MovieCard = ({ movie}) => {
    console.log(movie);
  // Destructure the 'data' prop to access individual properties
  const { Title, Year, imdbID, Type, Poster } = movie;

  return (
  
  <Link to={`./movie/${imdbID}`}>
    <div className='movie-card'>
       <div className='image-container'> <img src={Poster} alt={`${Title} Poster`} /></div>
      <div className='movie-info'>
        <h3>{Title}</h3>
        <p>{Year}</p>
       
      </div>
    </div>
  
  
  </Link>
  );
};

export default MovieCard;
