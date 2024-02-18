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
            <li>
              <Link href={`/${locale}/signup`}>Inscription</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch />
        <div>
          <Link href={`/${locale}/user/profile`}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
