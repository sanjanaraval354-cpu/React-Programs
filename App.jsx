import { useState } from "react";

function App() {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useState([]);
  const addMovie = () => {
    if (movie.trim() === "" || rating === "") {
      alert("Please enter movie name and rating");
      return;
    }
    const newMovie = {
      id: Date.now(),
      name: movie,
      rating: rating,
    };
    setMovies([...movies, newMovie]);
    setMovie("");
    setRating("");
  };
  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };
  return (
    <div>
      <h1>Movie Watchlist</h1>
      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>
      <h2>Watchlist</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.name}</h3>
          <p>Rating: {movie.rating}/5</p>
          <button onClick={() => removeMovie(movie.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default App;
