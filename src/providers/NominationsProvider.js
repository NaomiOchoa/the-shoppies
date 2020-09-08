import React, { createContext, useState, useContext } from "react";
import { useRealmApp } from "./RealmAppProvider";
import { UPDATE_USER } from "../graphql-operations";
import { useMutation } from "@apollo/react-hooks";

const NominationsContext = createContext(null);

const NominationsProvider = ({ children }) => {
  const { user } = useRealmApp();
  const [nominations, setNominations] = React.useState(
    user.customData.nominatedMovies
  );

  const [updateNominations, { data }] = useMutation(UPDATE_USER);

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

      setNominations(newNominationList);
    } catch (error) {
      console.error("Issue with updating saved stocks:", error);
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

      setNominations(newNominationList);
    } catch (error) {
      console.error("Issue with updating saved stocks:", error);
    }
  };

  return (
    <NominationsContext.Provider
      value={{ nominations, addNomination, removeNomination }}
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
