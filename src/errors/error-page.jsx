import React from "react";
import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-black">
      <Link to="/">
        <img src="../images/logo.webp" alt="logo" className="w-36 2xl:w-40" />
      </Link>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
