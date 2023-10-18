import React from 'react';
import Logo from '../../components/atom/Logo';
import SignupForm from '../../components/organisms/SignupForm';
import Layout1 from '../../components/template/Layout1';

const SignupPage = () => {
  return (
    <>
      <Layout1.Title>
        <Logo />
      </Layout1.Title>
      <SignupForm />
    </>
  );
};

export default SignupPage;
