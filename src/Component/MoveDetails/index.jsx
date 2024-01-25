import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import { fetchAsyncMovieOrSeriesDetails, getAllMovieDetailsOrSeries, removeAddMovieOrSeries } from '../../feature/Movies/MovieSlice';
import "./style.scss";
import Loading from '../Loading';

const MovieDetails = () => {
    const [loading, setLoading] = useState(true);
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getAllMovieDetailsOrSeries);
    console.log("Movie Details", data);

    const {
        Title, Year, Rated, Released, Runtime, Actors, Awards, BoxOffice, Country,
        DVD, Director, Genre, Language, Metascore, Plot, Poster, Production, Ratings, Response, Writer, imdbRating, imdbVotes, Type, Website,
    } = data;

    useEffect(() => {
        dispatch(fetchAsyncMovieOrSeriesDetails(imdbID));
        dispatch(removeAddMovieOrSeries());
        setLoading(false);
    }, [imdbID, dispatch]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="movie_card" id="ave">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={Poster} alt="Movie Poster" />
                            <div className='info-container'>
                                <h1>{Title}</h1>
                                <h4>{Year},{Director}</h4>
                                <span className="minutes">{Runtime}</span>
                                <span className="type">{Genre}</span>
                                <span className="type">{Released}</span>
                                <p className="type">Language: {Language}</p>
                                <p className="type">Origin: {Country}</p>
                                <p className="type">Actors: {Actors}</p>
                                <p className="type">Writer: {Writer}</p>
                            </div>
                        </div>
                        <div className="movie_desc">
                            <p className="text">
                                {Plot}
                            </p>
                        </div>
                        <div className="movie_social">
                            <ul>
                                <li><i className="material-icons"><StarHalfRoundedIcon />{imdbRating}</i></li>
                                <li><i className="material-icons"><ThumbUpAltIcon/>{imdbVotes}</i></li>
                                <li><i className="material-icons"><MilitaryTechRoundedIcon/>{Awards}</i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="blur_back ave_back" style={{ backgroundImage: `url(${Poster})` }}></div>
                </div>
            )}
        </>
    );
};

export default MovieDetails;
