import React from "react";
import Image from "next/image";
import styles from "./MovieDetails.module.scss";

const MovieDetails = ({ movie }) => {
  return (
    <div className={styles.details}>
      <div className={styles.background}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
        />
      </div>
      <div className={styles.content}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          width={250}
          height={400}
          alt={movie.title}
        />
        <div className={styles.description}>
          <h1>
            {movie.title}{" "}
            <span className={styles.releaseDate}>
              ({new Date(movie.release_date).toLocaleDateString("fr-FR")})
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
