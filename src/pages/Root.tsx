import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Alert from '../components/organisms/Alert';
import useAlert from '../hooks/ui/useAlert';
import useOutsideClick from '../hooks/ui/useOutsideClick';
import useLoading from '../hooks/ui/useLoading';
import Spinner from '../components/atom/Spinner';

const Root = () => {
  const { alertInfo, closeAlert } = useAlert();
  const { loading } = useLoading();
  const alertRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    closeAlert();
  };

  useOutsideClick(alertRef, handleOutsideClick);

  return (
    <>
      <Outlet />
      {loading.isLoading && <Spinner />}
      {alertInfo.isOpen && <Alert ref={alertRef} />}
    </>
  );
};

export default Root;
