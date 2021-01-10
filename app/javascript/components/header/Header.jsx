import React from "react";
import AuthHeader from "./AuthHeader";
import NonAuthHeader from "./NonAuthHeader";

export default function Header({ current_user, logged_in }) {
  return (
    <>
      {logged_in ? (
        <AuthHeader current_user={current_user} />
      ) : (
        <NonAuthHeader />
      )}
    </>
  );
}
