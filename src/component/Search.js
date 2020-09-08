import React, { useState, useEffect } from "react";
import { Icon, Input, Item, Divider } from "semantic-ui-react";
import { GET_MOVIES } from "../graphql-operations";
import { useQuery } from "@apollo/react-hooks";
import SearchResult from "./SearchResult";
import "./Search.css";

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
    <section className="content-section">
      <Divider horizontal>Search</Divider>
      <Input
        iconPosition="left"
        icon={<Icon name="search" inverted circular />}
        placeholder="Movie Title"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
      />
      <Item.Group divided>
        {searchResults.map((movie) => {
          return (
            <SearchResult movie={movie} key={`${movie.Title} ${movie.Year}`} />
          );
        })}
      </Item.Group>
    </section>
  );
}
