import gql from "graphql-tag";

export const GET_MOVIES = gql`
  query MovieData($searchValue: String!) {
    MovieData(input: $searchValue) {
      results {
        Title
        Year
        Poster
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateOneUserDatum(
    $query: UserDatumQueryInput
    $set: UserDatumUpdateInput!
  ) {
    updateOneUserDatum(query: $query, set: $set) {
      _id
      username
      nominatedMovies {
        Title
        Poster
        Year
      }
      submitted
    }
  }
`;
