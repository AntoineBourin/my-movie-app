import React from "react";
import SearchResults from "./SearchResults";

const MoviesPage = ({ searchParams, params: { locale } }) => {
  return <SearchResults searchParams={searchParams} locale={locale} />;
};

export default MoviesPage;
