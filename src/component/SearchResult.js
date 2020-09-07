import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

export default function SearchResult(props) {
  const { movie } = props;

  return (
    <Item>
      <Item.Image src="/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header>{movie.Title}</Item.Header>
        <Item.Meta>
          <span className="year">{movie.Year}</span>
        </Item.Meta>
        <Item.Extra>
          <Button primary floated="right">
            Nominate
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
