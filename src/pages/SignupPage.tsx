import React from 'react';
import Logo from '../components/atom/Logo';
import SignupForm from '../components/organisms/SignupForm';
import Layout1 from '../components/template/Layout1';

const SignupPage = () => {
  return (
    <Layout1>
      <Layout1.CenterCard>
        <Layout1.Title>
          <div className="absolute left-1/2 -translate-x-1/2 -top-24">
            <Logo />
          </div>
        </Layout1.Title>
        <SignupForm />
      </Layout1.CenterCard>
    </Layout1>
  );
};

export default SignupPage;
