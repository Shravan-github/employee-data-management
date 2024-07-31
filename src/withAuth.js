import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
      return <Navigate to="/sign-in" />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
