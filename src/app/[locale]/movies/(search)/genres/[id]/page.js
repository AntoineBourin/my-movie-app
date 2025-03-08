import React from "react";
import SearchResults from "../../SearchResults";

const GenreIdPage = async props => {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const {
    id,
    locale
  } = params;

  return (
    <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
  );
};

export default GenreIdPage;
