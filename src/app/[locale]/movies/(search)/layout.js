import SearchSidebar from "@/components/search-sidebar/SearchSidebar";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/utils/movieClient";

const MovieSearchLayout = async props => {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
