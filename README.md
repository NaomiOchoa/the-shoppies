### Hosted at: https://shoppies-app-frnsh.mongodbstitch.com/

## Project Description

The Shoppies is a movie nomination web application for the Shoppies awards.

Users are able to sign up for an account to particiate in the nomination process. They may log out/log back in if they would like to finish their nominations at a later time. [MongoDB Realm](https://www.mongodb.com/realm) is used for authentication and maintaining a database of users.

Users can search for a movie to nominate. This is accomplished through an [Apollo](https://www.apollographql.com/) hook that utilizes a [GraphQL](https://graphql.org/) query the to retrieve data from the [OMDb API](https://www.omdbapi.com/).

Users can add movies from their search to their nominations. Once 5 nominations have been selected, the user will be able to submit them. Once nominations have been submitted, the user will see a summary view of the movies they have selected and will no longer have access to the search/add nomination features.

[Semantic UI](https://react.semantic-ui.com/) was used for basic styling of the [React](https://reactjs.org/) components. State is managed via React Hooks and React Context.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
