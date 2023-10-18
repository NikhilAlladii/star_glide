import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1> Oops! </h1>
      <p>sorry, an unexpected error has been occured !</p>
      <p>
        {error.status} - {error.statusText}{" "}
      </p>
    </div>
  );
};

export default Error;
