import React from 'react';
import useUser from '../../hooks/auth/useUser';
import { Navigate } from 'react-router-dom';

export type ProtectedRouterProps = {
  children: React.ReactNode;
};

const ProtectedRouter = ({ children }: ProtectedRouterProps) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRouter;
