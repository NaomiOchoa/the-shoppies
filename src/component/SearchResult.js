import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import { useNominationsProvider } from "../providers/NominationsProvider";

export default function SearchResult(props) {
  const { movie } = props;
  const { addNomination } = useNominationsProvider();

  return (
    <Item>
      <Item.Image src={movie.Poster} size="tiny" />
      <Item.Content>
        <Item.Header>{movie.Title}</Item.Header>
        <Item.Meta>
          <span className="year">{movie.Year}</span>
        </Item.Meta>
        <Item.Extra>
          <Button primary floated="right" onClick={() => addNomination(movie)}>
            Nominate
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
