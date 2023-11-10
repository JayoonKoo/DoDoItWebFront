import React from 'react';
import Layout1 from '../../components/template/Layout1';
import Logo from '../../components/atom/Logo';
import LoginForm from '../../components/organisms/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Layout1.Title>
        <Logo />
      </Layout1.Title>
      <LoginForm />
    </>
  );
};

export default LoginPage;
