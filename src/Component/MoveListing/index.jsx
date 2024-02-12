// Import MoviesCard component if not already imported
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../feature/Movies/MovieSlice";
import MovieCard from "../MoveCard";
import "./style.scss";
import Slider from "react-slick";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
//  console.log("Movies from selector", movies);
  let renderMovies = "";
  let renderSeries = "";


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };


  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div>
        <h3>Enter a valid input</h3>
      </div>
    );

    renderSeries =
    series.Response === "True" ? (
      series.Search.map((show, index) => (
        <MovieCard key={index} movie={show} />
      ))
    ) : (
      <div>
        <h3>Enter a valid input</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container"><Slider {...settings}> {renderMovies}</Slider></div>
      </div>
      <div className="movie-list show-list">
        <h2>Series</h2>
        <div className="movie-container show-container"><Slider {...settings}>{renderSeries}</Slider></div>
      </div>
    </div>
  );
};

export default MovieListing;
