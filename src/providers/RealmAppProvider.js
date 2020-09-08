import React from "react";
import * as Realm from "realm-web";

const REALM_APP_ID = "shoppies-app-frnsh";
const app = new Realm.App({ id: REALM_APP_ID });

const RealmAppContext = React.createContext(null);

const RealmAppProvider = ({ children }) => {
  const appRef = React.useRef(app);
  const [user, setUser] = React.useState(app.currentUser);

  React.useEffect(() => {
    setUser(app.currentUser);
  }, [appRef.current.currentUser]);

  const registerUser = async (email, password) => {
    return await app.emailPasswordAuth.registerUser(email, password);
  };

  const logIn = async (email, password) => {
    const credentials = Realm.Credentials.emailPassword(email, password);
    await app.logIn(credentials);
    setUser(app.currentUser);
  };

  const logOut = async () => {
    await app.currentUser.logOut();
    setUser(app.currentUser);
  };

  return (
    <RealmAppContext.Provider
      value={{
        id: REALM_APP_ID,
        registerUser,
        logIn,
        logOut,
        user,
        app,
      }}
    >
      {children}
    </RealmAppContext.Provider>
  );
};

export default RealmAppProvider;

export const useRealmApp = () => {
  const app = React.useContext(RealmAppContext);
  if (!app) {
    throw new Error("You must call useRealmApp() inside of a <RealmApp />.");
  }
  return app;
};
