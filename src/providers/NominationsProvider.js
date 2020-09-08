import React, { createContext } from "react";
import { useRealmApp } from "./RealmAppProvider";
import { UPDATE_USER } from "../graphql-operations";
import { useMutation } from "@apollo/react-hooks";

const NominationsContext = createContext(null);

const NominationsProvider = ({ children }) => {
  const { user } = useRealmApp();
  const [nominations, setNominations] = React.useState(
    user.customData.nominatedMovies
  );
  const [submitted, setSubmitted] = React.useState(user.customData.submitted);

  const [updateNominations, { data }] = useMutation(UPDATE_USER);

  const submitNominations = async () => {
    try {
      await updateNominations({
        variables: {
          query: { _id: user._id },
          set: {
            submitted: true,
          },
        },
      });
      await user.refreshAccessToken();
      setSubmitted(true);
    } catch (error) {
      console.error("Issue with submitting nominations:", error);
    }
  };

  const addNomination = async (movie) => {
    try {
      const newNominationList = [
        ...nominations,
        { Title: movie.Title, Poster: movie.Poster, Year: movie.Year },
      ];

      await updateNominations({
        variables: {
          query: { _id: user._id },
          set: {
            nominatedMovies: newNominationList,
          },
        },
      });

      await user.refreshAccessToken();

      setNominations(newNominationList);
    } catch (error) {
      console.error("Issue with updating nominations:", error);
    }
  };

  const removeNomination = async (movie) => {
    try {
      const newNominationList = nominations.filter((nom) => nom !== movie);

      await updateNominations({
        variables: {
          query: { _id: user._id },
          set: {
            nominatedMovies: newNominationList,
          },
        },
      });

      await user.refreshAccessToken();

      setNominations(newNominationList);
    } catch (error) {
      console.error("Issue with updating nominations:", error);
    }
  };

  return (
    <NominationsContext.Provider
      value={{
        nominations,
        addNomination,
        removeNomination,
        submitted,
        submitNominations,
      }}
    >
      {children}
    </NominationsContext.Provider>
  );
};

export default NominationsProvider;

export const useNominationsProvider = () => {
  const nominations = React.useContext(NominationsContext);
  if (!nominations) {
    throw new Error(
      "You must call useNominationsProvider() inside of the NominationsPovider."
    );
  }
  return nominations;
};
