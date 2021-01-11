import React, { useEffect, useState } from "react";
import AuthHeader from "./AuthHeader";
import NonAuthHeader from "./NonAuthHeader";

export default function Header({ current_user = null, logged_in = false }) {
  let [currentUser, setCurrentUser] = useState(current_user);
  let [loggedIn, setLoggedIn] = useState(logged_in);

  useEffect(() => {
    setCurrentUser(current_user);
    setLoggedIn = logged_in;
  }, [current_user, logged_in]);

  return (
    <>
      {loggedIn && currentUser ? (
        <AuthHeader currentUser={currentUser} />
      ) : (
        <NonAuthHeader />
      )}
    </>
  );
}
