import React from "react";
import { AuthContainer } from "../containers/AuthContainer";

export default ({ match }) => {
  const { kind } = match.params;
  return (
    <>
      <AuthContainer kind={kind} />
    </>
  );
};
