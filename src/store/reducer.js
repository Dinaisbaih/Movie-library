import movies from "../movies";

import { ADD_MOVIE, DELETE_MOVIE, WATCH_MOVIE } from "./actions";

const initialState = { movies: movies };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => {
          return movie.id !== action.payload.movieId;
        }),
      };

    case WATCH_MOVIE:
      console.log(action.payload);
      let watchedMovie = movies.find(
        (movie) => movie.id === action.payload.movieId
      );
      console.log(watchedMovie);

      if (watchedMovie.watched === true) {
        watchedMovie.watched = false;
      } else {
        watchedMovie.watched = true;
      }
      console.log(watchedMovie);
      return {
        ...state,
        // movies: movies,
        movies: state.movies.map((movie) =>
          movie.id === watchedMovie.id ? watchedMovie : movie
        ),
      };

    case ADD_MOVIE:
      let newMovie = {
        name: action.payload.newMovie,
        id: state.movies[state.movies.length - 1].id + 1,
        watched: false,
      };
      // action.payload.newMovie.id = state.movies[state.movies.length - 1].id + 1;
      // action.payload.newMovie.watched = false;
      // console.log("reducer");
      return {
        ...state,
        movies: [...state.movies, newMovie],
      };

    default:
      return state;
  }
};
export default reducer;
