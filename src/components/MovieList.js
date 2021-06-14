import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, deleteMovie, watchMovie } from "../store/actions";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  console.log(movies, "helloooo");
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [newMovie, setNewMovie] = useState();

  let List = movies
    .filter((movie) => !movie.watched)
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <li>
        {movie.name}
        <div>
          <button
            onClick={() => dispatch(watchMovie(movie.watched, movie.id))}
            style={{ width: "75px", height: "20px", marginRight: "10px" }}
          >
            Watch
          </button>
          <button
            onClick={() => dispatch(deleteMovie(movie.id))}
            style={{ width: "60px", height: "20px" }}
          >
            Delete
          </button>
        </div>
      </li>
    ));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(newMovie));
  };
  return (
    <section>
      <h1>Watchlist</h1>

      <p>Watch List : {List.length}</p>
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>{List}</ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Add a movie ..."
          value={newMovie}
          onChange={(event) => setNewMovie(event.target.value)}
        />
        <button type="submit" style={{ width: "40px", height: "20px" }}>
          Add
        </button>
      </form>
    </section>
  );
};

export default MovieList;
