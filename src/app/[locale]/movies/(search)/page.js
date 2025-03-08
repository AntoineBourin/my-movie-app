import React from "react";
import SearchResults from "./SearchResults";

const MoviesPage = async (props) => {
  const { locale } = await props.params;

  const searchParams = await props.searchParams;
  return <SearchResults searchParams={searchParams} locale={locale} />;
};

export default MoviesPage;
