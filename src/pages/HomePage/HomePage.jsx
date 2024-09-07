import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/tmdbAPI";
import MovieList from "../../components/MovieList/MovieList";
// import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results || []);
      } catch (error) {}
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No trending movies available</p>
      )}
    </div>
  );
};

export default HomePage;
