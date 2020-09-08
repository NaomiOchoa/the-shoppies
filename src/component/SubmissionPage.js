import React from "react";
import { Header, Button, Divider } from "semantic-ui-react";

export default function SubmissionPage() {
  return (
    <div>
      <Header as="h2">All done! Ready to submit?</Header>
      <Button primary size="large">
        Submit!
      </Button>
    </div>
  );
}
