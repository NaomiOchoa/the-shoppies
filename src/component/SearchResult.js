import React from "react";
import { Button, Item } from "semantic-ui-react";
import { useNominationsProvider } from "../providers/NominationsProvider";

export default function SearchResult(props) {
  const { movie } = props;
  const { nominations, addNomination } = useNominationsProvider();

  const isNominated = !!nominations.filter((nom) => {
    return nom.Title === movie.Title && nom.Year === movie.Year;
  }).length;

  return (
    <Item>
      {movie.Poster === "N/A" ? (
        <Item.Image src="/Default Movie-01.svg" size="tiny" />
      ) : (
        <Item.Image src={movie.Poster} size="tiny" />
      )}
      <Item.Content>
        <Item.Header>{movie.Title}</Item.Header>
        <Item.Meta>
          <span className="year">{movie.Year}</span>
        </Item.Meta>
        <Item.Extra>
          {!isNominated ? (
            <Button
              color="teal"
              floated="right"
              onClick={() => addNomination(movie)}
            >
              Nominate
            </Button>
          ) : (
            <Button color="teal" floated="right" disabled>
              Nominate
            </Button>
          )}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
