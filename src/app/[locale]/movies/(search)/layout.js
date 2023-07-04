import SearchSidebar from "@/components/search-sidebar/SearchSidebar";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/utils/movieClient";

const MovieSearchLayout = async ({ children, params: { locale } }) => {
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
