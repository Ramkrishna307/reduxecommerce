import React from 'react';
import "./style.scss";
const MovieCard = ({ movie}) => {
    console.log(movie);
  // Destructure the 'data' prop to access individual properties
  const { Title, Year, imdbID, Type, Poster } = movie;

  return (
    <div className='movie-card'>
       <div className='image-container'> <img src={Poster} alt={`${Title} Poster`} /></div>
      <div className='movie-info'>
        <h3>{Title}</h3>
        <p>{Year}</p>
       
      </div>
    </div>
  );
};

export default MovieCard;
