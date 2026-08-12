import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-primary">
          {error?.status || "404"}
        </h1>

        {/* Error Title */}
        <h2 className="text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Error Message */}
        <p className="text-base-content/70 mt-4">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for doesn't exist or has been moved."}
        </p>

        {/* Back Home Button */}
        <Link
          to="/"
          className="btn btn-primary mt-6"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

