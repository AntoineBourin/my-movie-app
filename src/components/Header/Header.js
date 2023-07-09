import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MovieSearch from "../movie-search/MovieSearch";
import LanguageSelector from "../language-selector/LanguageSelector";

const Header = ({ locale }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href={`/${locale}`}>MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${locale}/series`}>Séries</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>Films</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch />
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
