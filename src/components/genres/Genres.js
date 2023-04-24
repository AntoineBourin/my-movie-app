import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
import styles from "./Genres.module.scss";

const Genres = async () => {
  const { genres } = await getMovieByPath("/genre/movie/list");
  return (
    <div>
      <h2>Parcourir par genres</h2>
      <div className={styles.container}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
