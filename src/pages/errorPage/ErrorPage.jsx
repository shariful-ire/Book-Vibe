import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

      <h1 className="text-6xl font-bold text-gray-900">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Something went wrong
      </h2>

      <p className="mt-2 text-gray-500">
        {error?.statusText || error?.message || "Page not found"}
      </p>

    </div>
  );
};

export default ErrorPage;