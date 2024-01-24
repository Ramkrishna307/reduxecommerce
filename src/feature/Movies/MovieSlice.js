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
const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
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
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
