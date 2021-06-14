export const DELETE_MOVIE = "DELETE_MOVIE";
export const WATCH_MOVIE = "WATCH_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const deleteMovie = (movieId) => {
  return {
    type: DELETE_MOVIE,
    payload: { movieId },
  };
};

export const watchMovie = (watched, movieId) => {
  return {
    type: WATCH_MOVIE,
    payload: { watched, movieId },
  };
};

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: { newMovie },
  };
};
