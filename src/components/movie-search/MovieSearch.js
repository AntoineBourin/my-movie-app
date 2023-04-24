"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./movie-search-results/MovieSearchResults";
import styles from "./MovieSearch.module.scss";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => updateMovieSearch(e.target.value)}
        placeholder="Rechercher un titre ..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults movieResults={movieResults} />
      )}
    </div>
  );
};

export default MovieSearch;
