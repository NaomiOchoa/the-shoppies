import React from "react";
import { useNominationsProvider } from "../providers/NominationsProvider";
import { Card, Image } from "semantic-ui-react";

export default function Submitted() {
  const { nominations } = useNominationsProvider();

  return (
    <section className="content-section">
      <Card.Group centered>
        {nominations.map((nominee) => {
          return (
            <Card key={`${nominee.Title} ${nominee.Year}`}>
              <Image
                src={nominee.Poster}
                style={{ height: "428px", width: "292px" }}
              />
              <Card.Content>
                <Card.Header>{nominee.Title}</Card.Header>
                <Card.Meta>{nominee.Year}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </section>
  );
}
