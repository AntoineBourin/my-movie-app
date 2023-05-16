import SearchSidebar from "@/components/search-sidebar/SearchSidebar";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/utils/movieClient";

const MovieSearchLayout = async ({ children }) => {
  const { genres } = await getMovieByPath("/genre/movie/list");
  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
