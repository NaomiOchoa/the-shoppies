import React from "react";
import { Header, Button, Divider } from "semantic-ui-react";
import { useNominationsProvider } from "../providers/NominationsProvider";

export default function SubmissionPage() {
  const { submitNominations } = useNominationsProvider();
  return (
    <section className="content-section">
      <Header as="h2" textAlign="center">
        All done! Ready to submit?
      </Header>
      <Button color="teal" size="large" onClick={submitNominations}>
        Submit!
      </Button>
    </section>
  );
}
