import React from 'react';
import { Outlet } from 'react-router-dom';
import Alert from '../components/organisms/Alert';
import useAlert from '../hooks/ui/useAlert';

const Root = () => {
  const { alertInfo } = useAlert();

  return (
    <>
      <Outlet />
      {alertInfo.isOpen && <Alert />}
    </>
  );
};

export default Root;
