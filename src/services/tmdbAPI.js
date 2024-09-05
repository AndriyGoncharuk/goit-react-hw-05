import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTJlZjBkYTRkY2M2ZjBjYjAwNDVlMTQzM2U1NTZmOCIsIm5iZiI6MTcyNTU2MTY2MS42MDAyNTgsInN1YiI6IjY2ZDlmYTU0MjI2NzcyMDU0YTE4NDk0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aefWfBR7-jaIXfIMghnRLJ9eip3m69qgxW_U4B5ntP0";
const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_HEADER = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day`,
    AUTH_HEADER
  );
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}`,
    AUTH_HEADER
  );
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, AUTH_HEADER);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    AUTH_HEADER
  );
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    AUTH_HEADER
  );
  return response.data;
};
