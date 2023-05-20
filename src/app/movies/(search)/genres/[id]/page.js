import React from "react";
import SearchResults from "../../SearchResults";

const GenreIdPage = ({ params, searchParams }) => {
  return <SearchResults searchParams={searchParams} genreId={params.id} />;
};

export default GenreIdPage;
