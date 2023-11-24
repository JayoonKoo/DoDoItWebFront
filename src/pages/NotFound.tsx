import React from 'react';
import Layout2 from '../components/template/Layout2';
import Logo from '../components/atom/Logo';

const NotFound = () => {
  return (
    <Layout2
      titleElement={<Logo />}
      contetnElement={<p>죄송합니다. 요청하신 페이지는 없는 페이지 입니다.</p>}
    />
  );
};

export default NotFound;
