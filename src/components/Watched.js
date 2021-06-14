import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteMovie, watchMovie } from "../store/actions";

const Watched = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  console.log(movies, "watched");

  const [query, setQuery] = useState("");
  console.log("ss");
  const arr = movies
    .filter((movie) => movie.watched)
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <li>
        {movie.name}
        <div>
          <button
            onClick={() => dispatch(watchMovie(movie.watched, movie.id))}
            style={{ width: "75px", height: "20px", marginRight: "10px" }}
          >
            Unwatch
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

  return (
    <>
      <section>
        <h1>Watched List</h1>
        <p>Watched : {arr.length}</p>

        <input
          type="text"
          placeholder="Search for a movie"
          onChange={(event) => setQuery(event.target.value)}
        />
        <p>{arr}</p>
      </section>
    </>
  );
};

export default Watched;
