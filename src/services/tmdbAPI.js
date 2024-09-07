import axios from "axios";

const url = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTJlZjBkYTRkY2M2ZjBjYjAwNDVlMTQzM2U1NTZmOCIsIm5iZiI6MTcyNTY5NjI0OS42NDczOTQsInN1YiI6IjY2ZDlmYTU0MjI2NzcyMDU0YTE4NDk0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qR8Qyx6VWRpfnn8kb147pXnvc9HKdhRPRewLMW70rKY",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${url}/trending/movie/day`, options);
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${url}/movie/${movieId}`, options);
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get(
    `${url}/search/movie?query=${query}`,
    options
  );
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${url}/movie/${movieId}/credits`, options);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${url}/movie/${movieId}/reviews`, options);
  return response.data;
};
