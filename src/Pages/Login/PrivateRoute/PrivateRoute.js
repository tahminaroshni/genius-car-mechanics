import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Spinner animation="border" />
  }

  return (
    <div>
      {
        user?.email
          ?
          <Outlet />
          :
          <Navigate to='/login' state={{ from: location }} />
      }
    </div>
  );
};

export default PrivateRoute;