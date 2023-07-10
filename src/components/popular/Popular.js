import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../media-card/MediaCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionaries";

const Popular = async ({ locale }) => {
  const { results } = await getMovieByPath("/movie/popular", [], locale);
  const i18n = await getDictionary(locale);
  const popularMovies = results.slice(0, 6);
  return (
    <div>
      <h2>{i18n.popular.title}</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
