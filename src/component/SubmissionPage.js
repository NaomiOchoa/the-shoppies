import React from "react";
import { Header, Button } from "semantic-ui-react";
import { useNominationsProvider } from "../providers/NominationsProvider";
import {gsap} from 'gsap'

export default function SubmissionPage() {
  const { submitNominations } = useNominationsProvider();

  const throwPopcorn = () => {
    const tl = gsap.timeline()
    tl.to(".kernel", {
      y: 10,
      duration: 1,
      rotation: 360,
      ease: "power2.out",
      stagger: {
        each: .01,
        from: "edges"
      }
    })
    tl.to(".kernel", {
      y: 350,
      duration: 1,
      rotation: -360,
      ease: "power2.in",
      delay: -0.5,
      stagger: {
        each: .01,
        from: "edges"
      }
    })
    return tl;
  }

  return (
    <section className="content-section">
      <Header as="h2" textAlign="center">
        All done! Ready to submit?
      </Header>
      <Button color="teal" size="large" onClick={submitNominations}>
        Submit!
      </Button>
      <Button size="tiny" onClick={throwPopcorn}>
        Throw Popcorn
      </Button>
    </section>
  );
}
