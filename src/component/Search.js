import React, { useState, useEffect } from "react";
import { Icon, Input, Item } from "semantic-ui-react";
import { GET_MOVIES } from "../graphql-operations";
import { useQuery } from "@apollo/react-hooks";
import SearchResult from "./SearchResult";

export default function Search() {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const { loading, error, data } = useQuery(GET_MOVIES, {
    variables: { searchValue: searchValue },
  });

  React.useEffect(() => {
    data ? setSearchResults(data.MovieData.results) : setSearchResults([]);
  }, [data]);

  return (
    <section>
      <Input
        iconPosition="left"
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Item.Group>
        {searchResults.map((movie) => {
          return <SearchResult movie={movie} />;
        })}
      </Item.Group>
    </section>
  );
}
