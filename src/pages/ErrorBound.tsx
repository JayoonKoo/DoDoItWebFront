import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NotFound from './NotFound';

const ErrorBound = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <NotFound />;
      default:
        <>Error</>;
    }
  }

  return <>Error</>;
};

export default ErrorBound;
