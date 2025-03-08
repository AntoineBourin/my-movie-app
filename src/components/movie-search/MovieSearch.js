"use client";

import { useEffect, useState } from "react";
import MovieSearchResults from "./movie-search-results/MovieSearchResults";
import styles from "./MovieSearch.module.scss";
import { useCurrentLanguage } from "@/hooks/useCurrentLanugage";
import { useDebounce } from "use-debounce";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchValue] = useDebounce(inputValue, 500);
  const currentLanguage = useCurrentLanguage();

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  useEffect(() => {
    updateMovieSearch(searchValue);
  }, [searchValue]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Rechercher un titre ..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults
          movieResults={movieResults}
          locale={currentLanguage}
        />
      )}
    </div>
  );
};

export default MovieSearch;
