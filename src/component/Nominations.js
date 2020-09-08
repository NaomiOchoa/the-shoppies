import React from "react";
import { Header, Card, Button } from "semantic-ui-react";
import { useNominationsProvider } from "../providers/NominationsProvider";

export default function Nominations() {
  const { nominations, removeNomination } = useNominationsProvider();
  return (
    <Card.Group centered stackable>
      <Card>
        {nominations[0] ? (
          <Card.Content>
            <Card.Header>
              {nominations[0].Title}
              <Button
                floated="right"
                onClick={() => removeNomination(nominations[0])}
              >
                Remove
              </Button>
            </Card.Header>
            <Card.Meta>{nominations[0].Year}</Card.Meta>
          </Card.Content>
        ) : (
          <Card.Content textAlign="center">
            <Card.Header style={{ padding: "0.5em" }}>1</Card.Header>
          </Card.Content>
        )}
      </Card>
      <Card>
        {nominations[1] ? (
          <Card.Content>
            <Card.Header>
              {nominations[1].Title}
              <Button
                floated="right"
                onClick={() => removeNomination(nominations[1])}
              >
                Remove
              </Button>{" "}
            </Card.Header>
            <Card.Meta>{nominations[1].Year}</Card.Meta>
          </Card.Content>
        ) : (
          <Card.Content textAlign="center">
            <Card.Header style={{ padding: "0.5em" }}>2</Card.Header>
          </Card.Content>
        )}
      </Card>
      <Card>
        {nominations[2] ? (
          <Card.Content>
            <Card.Header>
              {nominations[2].Title}
              <Button
                floated="right"
                onClick={() => removeNomination(nominations[2])}
              >
                Remove
              </Button>{" "}
            </Card.Header>
            <Card.Meta>{nominations[2].Year}</Card.Meta>
          </Card.Content>
        ) : (
          <Card.Content textAlign="center">
            <Card.Header style={{ padding: "0.5em" }}>3</Card.Header>
          </Card.Content>
        )}
      </Card>
      <Card>
        {nominations[3] ? (
          <Card.Content>
            <Card.Header>
              {nominations[3].Title}
              <Button
                floated="right"
                onClick={() => removeNomination(nominations[3])}
              >
                Remove
              </Button>
            </Card.Header>
            <Card.Meta>{nominations[4].Year}</Card.Meta>
          </Card.Content>
        ) : (
          <Card.Content textAlign="center">
            <Card.Header style={{ padding: "0.5em" }}>4</Card.Header>
          </Card.Content>
        )}
      </Card>
      <Card>
        {nominations[4] ? (
          <Card.Content>
            <Card.Header>
              {nominations[4].Title}
              <Button
                floated="right"
                onClick={() => removeNomination(nominations[4])}
              >
                Remove
              </Button>{" "}
            </Card.Header>
            <Card.Meta>{nominations[4].Year}</Card.Meta>
          </Card.Content>
        ) : (
          <Card.Content textAlign="center">
            <Card.Header style={{ padding: "0.5em" }}>5</Card.Header>
          </Card.Content>
        )}
      </Card>
    </Card.Group>
  );
}
