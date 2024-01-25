// MovieSlice.js
import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import APIKEY from '../../Common/apis/MovieApiKey.jsx';
import MovieApi from '../../Common/apis/MovieApi.jsx';

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies', async ()=>{
  
    const apiKey = APIKEY;
    const movieText = 'Harry';
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieText}&type=movie`;

    const response = await MovieApi.get(apiUrl);
    return response.data
})


export const fetchAsyncSeries=createAsyncThunk('movies/fetchAsyncSeries', async ()=>{
  
  const apiKey = APIKEY;
  const SeriesText = 'game';
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${SeriesText}&type=series`;

  const response = await MovieApi.get(apiUrl);
  return response.data
})

export const fetchAsyncMovieOrSeriesDetails=createAsyncThunk('movies/fetchAsyncMovieOrSeriesDetails', async (id)=>{
  
  const apiKey = APIKEY;
  const SeriesText = 'game';
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&Plot=full`;

  const response = await MovieApi.get(apiUrl);
  return response.data
})
const initialState = {
  movies: {},
  series:{},
  seletedMovieOrSeries:{},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeAddMovieOrSeries: (state) => {
      state. seletedMovieOrSeries = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log('Pending');
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log('Fulfilled');
        // You can handle the fulfilled action and update the state here
        return {...state,movies:payload};
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log('Rejected');
      })
      .addCase(fetchAsyncSeries.fulfilled, (state, { payload }) => {
        console.log('Fulfilled');
        // You can handle the fulfilled action and update the state here
        return {...state,series:payload};
      })
      .addCase(fetchAsyncMovieOrSeriesDetails.fulfilled, (state, { payload }) => {
        console.log('Fulfilled');
        // You can handle the fulfilled action and update the state here
        return {...state,seletedMovieOrSeries:payload};
      });
  },
});

export const {removeAddMovieOrSeries } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getAllMovieDetailsOrSeries = (state) => state.movies.seletedMovieOrSeries;
export default movieSlice.reducer;
