import React from 'react';
import Layout1 from '../../components/template/Layout1';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Layout1>
      <Layout1.CenterCard>
        <Outlet />
      </Layout1.CenterCard>
    </Layout1>
  );
};

export default AuthLayout;
