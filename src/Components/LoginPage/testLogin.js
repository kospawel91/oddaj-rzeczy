import React, { useCallback, useContext, useEffect, useState } from "react";
import db from "../../config/firebase";
import "firebase/auth";

const defaultUser = { loggedIn: false, email: "" };
const UserContext = React.createContext({});
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
function onAuthStateChange(callback) {
  return db.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email });
    } else {
      callback({ loggedIn: false });
    }
  });
}
function login(username, password) {
  return new Promise((resolve, reject) => {
    db
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}
function logout() {
  db.auth().signOut();
}
function LoginView({ onClick, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(username, password);
        }}
      >
        Login
      </button>
      <span>{error}</span>
    </div>
  );
}
function LogoutView({ onClick }) {
  const user = useContext(UserContext);
  return (
    <div>
      <span>You are logged in as {user.email}</span>
      <button onClick={onClick}>Logout</button>
    </div>
  );
}
function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const [error, setError] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);
  const requestLogin = useCallback((username, password) => {
    login(username, password).catch((error) => setError(error.code));
  });
  const requestLogout = useCallback(() => {
    logout();
  }, []);
  if (!user.loggedIn) {
    return <LoginView onClick={requestLogin} error={error} />;
  }
  return (
    <UserProvider value={user}>
      <LogoutView onClick={requestLogout} />
    </UserProvider>
  );
}