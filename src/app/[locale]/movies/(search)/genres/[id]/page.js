import React from "react";
import SearchResults from "../../SearchResults";

const GenreIdPage = ({ params: { id, locale }, searchParams }) => {
  return (
    <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
  );
};

export default GenreIdPage;
