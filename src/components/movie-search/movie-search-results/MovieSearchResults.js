import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./MovieSearchResults.module.scss";

const MovieSearchResults = ({ movieResults, locale }) => {
  return (
    <div className={styles.searchResults}>
      {movieResults.map((movie) => (
        <div key={movie.id}>
          <Link
            href={`/${locale}/movies/${movie.id}`}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Image
              width={90}
              height={50}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieSearchResults;
