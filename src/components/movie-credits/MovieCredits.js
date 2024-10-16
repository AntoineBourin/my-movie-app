import React from "react";
import styles from "./MovieCredits.module.scss";
import Image from "next/image";
import { getMovieByPath } from "@/utils/movieClient";

const MovieCredits = async ({ movieId }) => {
  const { cast } = await getMovieByPath(`/movie/${movieId}/credits`);
  return (
    <div className={styles.credits}>
      {cast.slice(0, 4).map((person) => (
        <div key={person.id}>
          <Image
            unoptimized
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${person.profile_path}`}
            alt={person.name}
            width={90}
            height={90}
          />
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCredits;
